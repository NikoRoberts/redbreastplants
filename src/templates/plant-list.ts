import { layout } from './layout';

interface Plant {
  slug: string;
  botanical_name: string;
  common_name: string | null;
  comments: string | null;
  average_height: number | null;
  average_width: number | null;
  flower_colour_and_season: string | null;
  soil_types: string | null;
  has_photo: boolean;
  is_tasmanian: boolean;
  is_groundcover: boolean;
  is_coastal: boolean;
  is_drought_tolerant: boolean;
  is_frost_hardy: boolean;
  is_dappled_shade: boolean;
  is_wet_area: boolean;
}

export function plantListPage(plants: Plant[]): string {
  const plantCards = plants
    .map((plant) => {
      const tags: string[] = [];
      if (plant.is_tasmanian) tags.push('Tasmanian');
      if (plant.is_groundcover) tags.push('Groundcover');
      if (plant.is_coastal) tags.push('Coastal');
      if (plant.is_drought_tolerant) tags.push('Drought Tolerant');
      if (plant.is_frost_hardy) tags.push('Frost Hardy');
      if (plant.is_wet_area) tags.push('Wet Area');

      const searchData = [
        plant.botanical_name,
        plant.common_name || '',
        plant.comments || '',
        plant.flower_colour_and_season || '',
        plant.soil_types || '',
        ...tags,
      ].join(' ').toLowerCase();

      const tagsHtml = tags.length > 0
        ? `<div class="flex flex-wrap gap-1 mt-2">
            ${tags.slice(0, 3).map(t => `<span class="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">${t}</span>`).join('')}
           </div>`
        : '';

      return `
      <a href="/australian-natives/${plant.slug}"
         class="plant-card block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100"
         data-search="${escapeAttr(searchData)}"
         data-tas="${plant.is_tasmanian}"
         data-ground="${plant.is_groundcover}"
         data-coastal="${plant.is_coastal}"
         data-drought="${plant.is_drought_tolerant}"
         data-frost="${plant.is_frost_hardy}"
         data-wet="${plant.is_wet_area}">
        <h3 class="font-semibold text-gray-900 text-sm">${escapeHtml(plant.botanical_name)}</h3>
        ${plant.common_name ? `<p class="text-green-700 text-sm">${escapeHtml(plant.common_name)}</p>` : ''}
        ${plant.comments ? `<p class="text-gray-500 text-xs mt-1 line-clamp-2">${escapeHtml(plant.comments.substring(0, 100))}${plant.comments.length > 100 ? '...' : ''}</p>` : ''}
        ${plant.average_height ? `<p class="text-gray-400 text-xs mt-1">Height: ${plant.average_height}m</p>` : ''}
        ${tagsHtml}
      </a>`;
    })
    .join('\n');

  const content = `
<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <!-- Header -->
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">Native Plant List</h1>
    <p class="text-gray-600">Browse over 500 Australian native plants available at Redbreast Plants</p>
  </div>

  <!-- Filters -->
  <div class="bg-white rounded-xl shadow-sm p-4 mb-6 sticky top-20 z-40">
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Search -->
      <div class="flex-grow">
        <input type="text"
               id="search-input"
               placeholder="Search plants..."
               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
      </div>

      <!-- Quick Filters -->
      <div class="flex flex-wrap gap-2">
        <button data-filter="tas" class="filter-btn px-3 py-2 text-sm rounded-lg border border-gray-300 hover:bg-green-50 hover:border-green-500 transition-colors">
          Tasmanian
        </button>
        <button data-filter="ground" class="filter-btn px-3 py-2 text-sm rounded-lg border border-gray-300 hover:bg-green-50 hover:border-green-500 transition-colors">
          Groundcover
        </button>
        <button data-filter="coastal" class="filter-btn px-3 py-2 text-sm rounded-lg border border-gray-300 hover:bg-green-50 hover:border-green-500 transition-colors">
          Coastal
        </button>
        <button data-filter="frost" class="filter-btn px-3 py-2 text-sm rounded-lg border border-gray-300 hover:bg-green-50 hover:border-green-500 transition-colors">
          Frost Hardy
        </button>
        <button data-filter="wet" class="filter-btn px-3 py-2 text-sm rounded-lg border border-gray-300 hover:bg-green-50 hover:border-green-500 transition-colors">
          Wet Area
        </button>
      </div>
    </div>
    <div class="mt-3 text-sm text-gray-500">
      Showing <span id="count">${plants.length}</span> plants
    </div>
  </div>

  <!-- Plant Grid -->
  <div id="plant-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    ${plantCards}
  </div>

  <!-- No Results -->
  <div id="no-results" class="hidden text-center py-12">
    <p class="text-gray-500 text-lg">No plants match your search.</p>
    <button onclick="clearFilters()" class="mt-4 text-green-700 hover:text-green-800">Clear filters</button>
  </div>
</div>

<script>
const searchInput = document.getElementById('search-input');
const plantCards = document.querySelectorAll('.plant-card');
const countEl = document.getElementById('count');
const noResults = document.getElementById('no-results');
const filterBtns = document.querySelectorAll('.filter-btn');
let activeFilters = new Set();

function filterPlants() {
  const searchTerm = searchInput.value.toLowerCase();
  let visible = 0;

  plantCards.forEach(card => {
    const searchData = card.dataset.search;
    const matchesSearch = !searchTerm || searchData.includes(searchTerm);

    let matchesFilters = true;
    if (activeFilters.size > 0) {
      matchesFilters = Array.from(activeFilters).every(filter => card.dataset[filter] === 'true');
    }

    if (matchesSearch && matchesFilters) {
      card.classList.remove('hidden');
      visible++;
    } else {
      card.classList.add('hidden');
    }
  });

  countEl.textContent = visible;
  noResults.classList.toggle('hidden', visible > 0);
}

searchInput.addEventListener('input', filterPlants);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    if (activeFilters.has(filter)) {
      activeFilters.delete(filter);
      btn.classList.remove('bg-green-700', 'text-white', 'border-green-700');
    } else {
      activeFilters.add(filter);
      btn.classList.add('bg-green-700', 'text-white', 'border-green-700');
    }
    filterPlants();
  });
});

function clearFilters() {
  searchInput.value = '';
  activeFilters.clear();
  filterBtns.forEach(btn => btn.classList.remove('bg-green-700', 'text-white', 'border-green-700'));
  filterPlants();
}
</script>`;

  return layout({
    title: 'Native Plant List - Redbreast Plants Tasmania',
    description: 'Browse over 500 Australian native plants available at Redbreast Plants nursery in Tasmania. Search by name, type, or growing conditions.',
    activePage: 'plantlist',
    content,
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

function escapeAttr(text: string): string {
  return escapeHtml(text);
}
