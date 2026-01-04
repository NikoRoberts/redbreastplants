import { layout } from './layout';

interface Plant {
  slug: string;
  botanical_name: string;
  common_name: string | null;
  alternative_names: string | null;
  comments: string | null;
  average_height: number | null;
  average_width: number | null;
  flower_colour_and_season: string | null;
  position: string | null;
  soil_types: string | null;
  drainage: string | null;
  frost_snow: string | null;
  wind_resistance: string | null;
  drought_tolerance: string | null;
  coastal_tolerance: string | null;
  fire: string | null;
  bush_food: string | null;
  bush_food_comments: string | null;
  timber_comments: string | null;
  has_photo: boolean;
}

export function plantPage(plant: Plant): string {
  const title = `${plant.botanical_name}${plant.common_name ? ` - ${plant.common_name}` : ''} - Australian Native Plant`;

  // Build growing conditions
  const conditions: Array<{label: string; value: string}> = [];
  if (plant.position) conditions.push({ label: 'Position', value: plant.position });
  if (plant.soil_types) conditions.push({ label: 'Soil', value: plant.soil_types });
  if (plant.drainage) conditions.push({ label: 'Drainage', value: plant.drainage });
  if (plant.frost_snow) conditions.push({ label: 'Frost/Snow', value: plant.frost_snow });
  if (plant.wind_resistance) conditions.push({ label: 'Wind', value: plant.wind_resistance });
  if (plant.drought_tolerance) conditions.push({ label: 'Drought', value: plant.drought_tolerance });
  if (plant.coastal_tolerance) conditions.push({ label: 'Coastal', value: plant.coastal_tolerance });
  if (plant.fire) conditions.push({ label: 'Fire', value: plant.fire });

  const conditionsHtml = conditions.length > 0
    ? `<div class="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Growing Conditions</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${conditions.map(c => `
            <div>
              <dt class="text-sm font-medium text-gray-500">${escapeHtml(c.label)}</dt>
              <dd class="text-gray-900">${escapeHtml(c.value)}</dd>
            </div>
          `).join('')}
        </div>
       </div>`
    : '';

  const content = `
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <!-- Breadcrumb -->
  <nav class="mb-6">
    <a href="/plant-list" class="text-green-700 hover:text-green-800">&larr; Back to Plant List</a>
  </nav>

  <!-- Header -->
  <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
    <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-1">${escapeHtml(plant.botanical_name)}</h1>
    ${plant.common_name ? `<p class="text-xl text-green-700 mb-2">${escapeHtml(plant.common_name)}</p>` : ''}
    ${plant.alternative_names ? `<p class="text-sm text-gray-500 italic">Also known as: ${escapeHtml(plant.alternative_names)}</p>` : ''}

    ${plant.comments ? `
      <div class="mt-4 pt-4 border-t border-gray-100">
        <p class="text-gray-700 leading-relaxed">${escapeHtml(plant.comments)}</p>
      </div>
    ` : ''}
  </div>

  <!-- Quick Stats -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    ${plant.average_height ? `
      <div class="bg-white rounded-lg shadow-sm p-4 text-center">
        <div class="text-2xl font-bold text-green-700">${plant.average_height}m</div>
        <div class="text-sm text-gray-500">Height</div>
      </div>
    ` : ''}
    ${plant.average_width ? `
      <div class="bg-white rounded-lg shadow-sm p-4 text-center">
        <div class="text-2xl font-bold text-green-700">${plant.average_width}m</div>
        <div class="text-sm text-gray-500">Width</div>
      </div>
    ` : ''}
    ${plant.flower_colour_and_season ? `
      <div class="bg-white rounded-lg shadow-sm p-4 text-center col-span-2">
        <div class="text-lg font-semibold text-green-700">${escapeHtml(plant.flower_colour_and_season)}</div>
        <div class="text-sm text-gray-500">Flowers</div>
      </div>
    ` : ''}
  </div>

  ${conditionsHtml}

  ${plant.bush_food || plant.bush_food_comments || plant.timber_comments ? `
    <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Special Uses</h2>
      <div class="space-y-3">
        ${plant.bush_food ? `<p><strong class="text-gray-700">Bush Food:</strong> ${escapeHtml(plant.bush_food)}</p>` : ''}
        ${plant.bush_food_comments ? `<p class="text-gray-600">${escapeHtml(plant.bush_food_comments)}</p>` : ''}
        ${plant.timber_comments ? `<p><strong class="text-gray-700">Timber:</strong> ${escapeHtml(plant.timber_comments)}</p>` : ''}
      </div>
    </div>
  ` : ''}

  <!-- CTA -->
  <div class="bg-green-50 rounded-xl p-6 text-center">
    <h2 class="text-lg font-semibold text-gray-900 mb-2">Interested in this plant?</h2>
    <p class="text-gray-600 mb-4">Contact a Redbreast Plants nursery to check availability and pricing.</p>
    <a href="/contact" class="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors">
      Contact Us
    </a>
  </div>
</div>`;

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: `${plant.botanical_name}${plant.common_name ? ` - ${plant.common_name}` : ''}`,
    image: plant.has_photo
      ? [`https://redbreastplants.com/plant-image/${plant.slug}.gif`]
      : [],
    description: plant.comments || `${plant.botanical_name} - Australian native plant`,
    brand: {
      '@type': 'Brand',
      name: 'Redbreast Plants',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AUD',
      price: '9',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Redbreast Plants',
      },
    },
  };

  return layout({
    title,
    description: plant.comments || `${plant.botanical_name} - Australian native plant available at Redbreast Plants nursery in Tasmania.`,
    activePage: 'plantlist',
    content,
    jsonLd,
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
