import { layout } from './layout';

export function homePage(): string {
  const content = `
<!-- Hero Section with Parallax -->
<div class="relative min-h-[70vh] flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-fixed bg-center bg-cover" style="background-image: url('/assets/images/nursery-wide.jpg');">
    <div class="absolute inset-0 bg-black/40"></div>
  </div>
  <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
    <div class="max-w-xl">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Australian Native Plants in Tasmania
      </h1>
      <p class="text-lg text-gray-200 mb-6">
        Redbreast Plants has been supplying a wide variety of native Australian plants for over 40 years.
        Visit our outlets in Margate and Flowerdale.
      </p>
      <div class="flex flex-wrap gap-3">
        <a href="/plant-list" class="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors">
          Browse Plants
        </a>
        <a href="/contact" class="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Features Section -->
<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- Plant List -->
    <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
        </svg>
      </div>
      <h2 class="text-xl font-semibold text-gray-900 mb-2">500+ Plants</h2>
      <p class="text-gray-600 mb-4">Browse our comprehensive list of native Australian plants with detailed growing information.</p>
      <a href="/plant-list" class="text-green-700 font-medium hover:text-green-800">Browse Plants &rarr;</a>
    </div>

    <!-- Locations -->
    <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      </div>
      <h2 class="text-xl font-semibold text-gray-900 mb-2">2 Locations</h2>
      <p class="text-gray-600 mb-4">Visit us in Margate (near Hobart) or Flowerdale (near Wynyard) in Tasmania.</p>
      <a href="/maps" class="text-green-700 font-medium hover:text-green-800">See Maps &rarr;</a>
    </div>

    <!-- Contact -->
    <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      </div>
      <h2 class="text-xl font-semibold text-gray-900 mb-2">Get in Touch</h2>
      <p class="text-gray-600 mb-4">Contact us for plant availability, pricing, or advice on native plants for your garden.</p>
      <a href="/contact" class="text-green-700 font-medium hover:text-green-800">Contact Us &rarr;</a>
    </div>

    <!-- About -->
    <div class="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <h2 class="text-xl font-semibold text-gray-900 mb-2">40+ Years</h2>
      <p class="text-gray-600 mb-4">Family-owned since the 1970s, we're Tasmania's native plant specialists.</p>
      <a href="/about-us" class="text-green-700 font-medium hover:text-green-800">Our Story &rarr;</a>
    </div>
  </div>
</div>

<!-- Info Banner -->
<div class="bg-amber-50 border-y border-amber-200">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <p class="text-center text-amber-800">
      <strong>Note:</strong> We only sell to customers in Tasmania due to biosecurity regulations.
    </p>
  </div>
</div>

<!-- About Preview -->
<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div class="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Tasmania's Native Plant Specialists</h2>
      <p class="text-gray-600 mb-4">
        Redbreast Plants is one of the biggest propagators of native plants in Tasmania. Originally called Robin Hill Trees
        and started by Barney Roberts in the 1970s, the business has steadily grown to now supply plants state-wide.
      </p>
      <p class="text-gray-600 mb-6">
        We propagate thousands of plants each year at our Flowerdale nursery, offering over 500 varieties of
        Australian native plants suited to Tasmanian conditions.
      </p>
      <a href="/about-us" class="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors">
        Learn More
      </a>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <img src="/assets/images/tasmanian-species.jpg" alt="Tasmanian native species" class="rounded-lg shadow-md">
      <img src="/assets/images/eucalyptus-autumn.jpg" alt="Native eucalyptus" class="rounded-lg shadow-md mt-8">
      <img src="/assets/images/snow-plant.jpg" alt="Native plant in snow" class="rounded-lg shadow-md">
      <img src="/assets/images/tubestock-pots.jpg" alt="Plants in tubestock pots" class="rounded-lg shadow-md mt-8">
    </div>
  </div>
</div>`;

  return layout({
    title: 'Redbreast Plants - Australian Native Plants in Tasmania',
    description: 'Redbreast Plants is an Australian native plant nursery in Tasmania, supplying over 500 varieties of native Australian plants since the 1970s.',
    activePage: 'index',
    content,
  });
}
