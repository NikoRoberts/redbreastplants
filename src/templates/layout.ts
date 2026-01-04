export interface LayoutOptions {
  title?: string;
  description?: string;
  activePage?: string;
  content: string;
  jsonLd?: object;
}

export function layout(options: LayoutOptions): string {
  const {
    title = 'Redbreast Plants - Australian Native Plants in Tasmania',
    description = 'Redbreast Plants is an Australian native plant nursery owned and operated in Tasmania',
    activePage = '',
    content,
    jsonLd,
  } = options;

  const navItems = [
    { href: '/', name: 'index', label: 'Home' },
    { href: '/about-us', name: 'about', label: 'About' },
    { href: '/maps', name: 'maps', label: 'Locations' },
    { href: '/plant-list', name: 'plantlist', label: 'Plants' },
    { href: '/contact', name: 'contact', label: 'Contact' },
  ];

  const nav = navItems
    .map(
      (item) =>
        `<a href="${item.href}" class="px-3 py-2 rounded-md text-sm font-medium ${
          activePage === item.name
            ? 'bg-green-700 text-white'
            : 'text-gray-700 hover:bg-green-100 hover:text-green-800'
        } transition-colors">${item.label}</a>`
    )
    .join('\n          ');

  const mobileNav = navItems
    .map(
      (item) =>
        `<a href="${item.href}" class="block px-3 py-2 rounded-md text-base font-medium ${
          activePage === item.name
            ? 'bg-green-700 text-white'
            : 'text-gray-700 hover:bg-green-100'
        }">${item.label}</a>`
    )
    .join('\n          ');

  const jsonLdScript = jsonLd
    ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="Copyright" content="Copyright 2005-2025 Redbreast Plants">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            green: {
              700: '#446f0b',
              800: '#365a09',
              100: '#e8f5d9',
            }
          }
        }
      }
    }
  </script>
  <link rel="icon" type="image/png" href="/assets/images/favicon.png">
</head>
<body class="bg-gray-50 min-h-screen flex flex-col">
  <!-- Header -->
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <a href="/" class="flex-shrink-0">
          <img src="/assets/images/logo.gif" alt="Redbreast Plants" class="h-12">
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-1">
          ${nav}
        </nav>

        <!-- Mobile menu button -->
        <button onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" class="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Nav -->
      <div id="mobile-menu" class="hidden md:hidden pb-4">
        <nav class="flex flex-col space-y-1">
          ${mobileNav}
        </nav>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="flex-grow">
    ${content}
  </main>

  <!-- Footer -->
  <footer class="bg-green-700 text-white mt-auto">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-3">Redbreast Plants</h3>
          <p class="text-green-100 text-sm">Tasmania's native plant specialists since the 1970s.</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="/plant-list" class="text-green-100 hover:text-white">Browse Plants</a></li>
            <li><a href="/maps" class="text-green-100 hover:text-white">Our Locations</a></li>
            <li><a href="/contact" class="text-green-100 hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Contact</h3>
          <p class="text-green-100 text-sm">Margate: +61 3 6267 2871</p>
          <p class="text-green-100 text-sm">Flowerdale: +61 419 871 784</p>
        </div>
      </div>
      <div class="border-t border-green-600 mt-8 pt-6 text-center text-green-100 text-sm">
        &copy; 2005-2026 Redbreast Plants. Tasmania only.
      </div>
    </div>
  </footer>
  ${jsonLdScript}
</body>
</html>`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
