import { Hono } from 'hono';
import { homePage } from './templates/home';
import { aboutPage } from './templates/about';
import { mapsPage } from './templates/maps';
import { contactPage } from './templates/contact';
import { plantListPage } from './templates/plant-list';
import { plantPage } from './templates/plant';
import { hobartPage } from './templates/hobart';
import { tubestockPage } from './templates/tubestock';
import plantsData from './data/plants.json';

type Bindings = {
  PHOTOS?: R2Bucket;
};

const app = new Hono<{ Bindings: Bindings }>();

// Static assets
import { mainCss } from './styles/main';
import { logoGif, banner3Jpg, img1Png, img2Png, img3Png, img4Gif, faviconPng } from './assets';
import { DSC_2818, DSC_2824 } from './assets';
// Large images served from R2: nursery-wide.jpg, tasmanian-species.jpg, eucalyptus-autumn.jpg,
// snow-plant.jpg, tubestock-pots.jpg, margate-shop.jpg, hobart-native-plant-nursery-1.jpg, tubestock.png

// CSS
app.get('/assets/styles/main.css', (c) => {
  return c.text(mainCss, 200, {
    'Content-Type': 'text/css',
    'Cache-Control': 'public, max-age=31536000',
  });
});

// Images - served as base64 decoded (small legacy images)
const imageAssets: Record<string, { data: string; type: string }> = {
  'logo.gif': { data: logoGif, type: 'image/gif' },
  'banner3.jpg': { data: banner3Jpg, type: 'image/jpeg' },
  'img1.png': { data: img1Png, type: 'image/png' },
  'img2.png': { data: img2Png, type: 'image/png' },
  'img3.png': { data: img3Png, type: 'image/png' },
  'img4.gif': { data: img4Gif, type: 'image/gif' },
  'favicon.png': { data: faviconPng, type: 'image/png' },
  'DSC_2818small.jpg': { data: DSC_2818, type: 'image/jpeg' },
  'DSC_2824small.jpg': { data: DSC_2824, type: 'image/jpeg' },
};

// Serve base64 assets, fallback to R2 for larger images
app.get('/assets/images/:filename', async (c) => {
  const filename = c.req.param('filename');
  const asset = imageAssets[filename];

  // If found in base64 assets, serve from there
  if (asset) {
    const binary = Uint8Array.from(atob(asset.data), (ch) => ch.charCodeAt(0));
    return new Response(binary, {
      status: 200,
      headers: {
        'Content-Type': asset.type,
        'Cache-Control': 'public, max-age=31536000',
      },
    });
  }

  // Try R2 for larger images
  if (c.env.PHOTOS) {
    const object = await c.env.PHOTOS.get(`images/${filename}`);
    if (object) {
      const contentType = filename.endsWith('.png') ? 'image/png' :
                         filename.endsWith('.gif') ? 'image/gif' : 'image/jpeg';
      return new Response(object.body, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }
  }

  return c.text('Not found', 404);
});

// Plant images from R2
app.get('/plant-image/:slug.gif', async (c) => {
  const slug = c.req.param('slug');

  // R2 not configured yet
  if (!c.env.PHOTOS) {
    return c.text('Not found', 404);
  }

  const object = await c.env.PHOTOS.get(`${slug}.gif`);

  if (!object) {
    return c.text('Not found', 404);
  }

  return new Response(object.body, {
    headers: {
      'Content-Type': 'image/gif',
      'Cache-Control': 'public, max-age=86400',
    },
  });
});

// Pages
app.get('/', (c) => {
  return c.html(homePage());
});

app.get('/about-us', (c) => {
  return c.html(aboutPage());
});

app.get('/maps', (c) => {
  return c.html(mapsPage());
});

app.get('/contact', (c) => {
  return c.html(contactPage());
});

app.get('/plant-list', (c) => {
  return c.html(plantListPage(plantsData.plants));
});

// SEO landing pages
app.get('/australian-native-plant-nursery-near-hobart', (c) => {
  return c.html(hobartPage());
});

app.get('/australian-native-plant-tubestock', (c) => {
  return c.html(tubestockPage());
});

// Individual plant pages
app.get('/australian-natives/:slug', (c) => {
  const slug = c.req.param('slug');
  const plant = plantsData.plants.find((p) => p.slug === slug);

  if (!plant) {
    return c.html(`
      <!DOCTYPE html>
      <html>
      <head><title>Plant Not Found</title></head>
      <body>
        <h1>Plant Not Found</h1>
        <p>Sorry, we couldn't find a plant with that name.</p>
        <p><a href="/plant-list">Browse all plants</a></p>
      </body>
      </html>
    `, 404);
  }

  return c.html(plantPage(plant));
});

// PHP redirects (for old URLs)
app.get('/index.php', (c) => c.redirect('/', 301));
app.get('/about-us.php', (c) => c.redirect('/about-us', 301));
app.get('/maps.php', (c) => c.redirect('/maps', 301));
app.get('/plant-list.php', (c) => c.redirect('/plant-list', 301));
app.get('/contact.php', (c) => c.redirect('/contact', 301));

// Sitemap for SEO
app.get('/sitemap.xml', (c) => {
  const baseUrl = 'https://www.redbreastplants.com';
  const staticPages = [
    { url: '/', priority: '1.0' },
    { url: '/about-us', priority: '0.8' },
    { url: '/maps', priority: '0.8' },
    { url: '/contact', priority: '0.8' },
    { url: '/plant-list', priority: '0.9' },
    { url: '/australian-native-plant-nursery-near-hobart', priority: '0.7' },
    { url: '/australian-native-plant-tubestock', priority: '0.7' },
  ];

  const plantUrls = plantsData.plants.map((p) => ({
    url: `/australian-natives/${p.slug}`,
    priority: '0.6',
  }));

  const allUrls = [...staticPages, ...plantUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return c.text(xml, 200, {
    'Content-Type': 'application/xml',
  });
});

// Robots.txt
app.get('/robots.txt', (c) => {
  return c.text(`User-agent: *
Allow: /

Sitemap: https://www.redbreastplants.com/sitemap.xml
`, 200, {
    'Content-Type': 'text/plain',
  });
});

// 404 handler
app.notFound((c) => {
  return c.html(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Page Not Found - Redbreast Plants</title>
      <link rel="stylesheet" href="/assets/styles/main.css">
    </head>
    <body>
      <div id="centered" class="border" style="padding: 50px;">
        <h1>Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <p><a href="/">Return to Home</a> | <a href="/plant-list">Browse Plants</a></p>
      </div>
    </body>
    </html>
  `, 404);
});

export default app;
