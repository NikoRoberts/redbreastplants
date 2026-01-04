import { layout } from './layout';

export function mapsPage(): string {
  const content = `
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-3xl font-bold text-gray-900 mb-8">Our Locations</h1>

  <div class="space-y-8">
    <!-- Margate -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Margate Outlet</h2>
        <p class="text-green-700 font-medium mb-4">Southern Tasmania - Near Hobart</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <p class="text-gray-600 mb-4">Our Margate outlet services the Hobart region and surrounding areas. Just 20 minutes south of Hobart CBD.</p>
            <dl class="space-y-2">
              <div>
                <dt class="font-medium text-gray-900">Address</dt>
                <dd class="text-gray-600">1709 Channel Hwy, Margate TAS 7054</dd>
              </div>
              <div>
                <dt class="font-medium text-gray-900">Phone</dt>
                <dd class="text-gray-600">+61 3 6267 2871</dd>
              </div>
            </dl>
          </div>
          <div class="space-y-4">
            <iframe
              src="https://www.google.com/maps?q=1709+Channel+Hwy,+Margate+TAS+7054,+Australia&output=embed"
              class="w-full h-48 rounded-lg"
              style="border:0;"
              allowfullscreen=""
              loading="lazy">
            </iframe>
            <img src="/assets/images/margate-shop.jpg" alt="Redbreast Plants Margate Shop" class="w-full rounded-lg shadow-sm">
          </div>
        </div>
      </div>
    </div>

    <!-- Flowerdale -->
    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Flowerdale Nursery</h2>
        <p class="text-green-700 font-medium mb-4">Northern Tasmania - Near Wynyard</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <p class="text-gray-600 mb-4">Our main propagation nursery is located in the Flowerdale valley. This is where we grow thousands of native plants each year.</p>
            <dl class="space-y-2">
              <div>
                <dt class="font-medium text-gray-900">Address</dt>
                <dd class="text-gray-600">242 Robin Hill Road, Flowerdale TAS 7325</dd>
              </div>
              <div>
                <dt class="font-medium text-gray-900">Phone</dt>
                <dd class="text-gray-600">+61 419 871 784</dd>
              </div>
            </dl>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps?q=242+Robin+Hill+Road,+Flowerdale+TAS+7325,+Australia&output=embed"
              class="w-full h-48 rounded-lg"
              style="border:0;"
              allowfullscreen=""
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 bg-amber-50 rounded-xl p-6">
    <p class="text-amber-800 text-center">
      <strong>Opening Hours:</strong> Please contact us for current opening hours as they may vary seasonally.
    </p>
  </div>
</div>`;

  return layout({
    title: 'Locations - Redbreast Plants Tasmania',
    description: 'Find Redbreast Plants nursery locations in Margate (Hobart) and Flowerdale (Wynyard), Tasmania.',
    activePage: 'maps',
    content,
  });
}
