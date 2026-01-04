import { layout } from './layout';

export function contactPage(): string {
  const content = `
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>

  <div class="grid md:grid-cols-2 gap-8">
    <!-- Contact Cards -->
    <div class="space-y-6">
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Margate Outlet</h2>
        <p class="text-green-700 text-sm mb-4">Southern Tasmania</p>
        <dl class="space-y-3">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <dd class="text-gray-600">1709 Channel Hwy<br>Margate TAS 7054</dd>
          </div>
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <dd class="text-gray-600">+61 3 6267 2871</dd>
          </div>
        </dl>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Flowerdale Nursery</h2>
        <p class="text-green-700 text-sm mb-4">Northern Tasmania</p>
        <dl class="space-y-3">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <dd class="text-gray-600">242 Robin Hill Road<br>Flowerdale TAS 7325</dd>
          </div>
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <dd class="text-gray-600">+61 419 871 784</dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- Info -->
    <div class="space-y-6">
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">How We Can Help</h2>
        <ul class="space-y-2 text-gray-600">
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Plant availability and pricing
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Advice on native plants for your garden
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Bulk orders for landscaping projects
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Plant identification queries
          </li>
        </ul>
      </div>

      <div class="bg-amber-50 rounded-xl p-6 border border-amber-200">
        <h2 class="text-lg font-semibold text-amber-800 mb-2">Important Note</h2>
        <p class="text-amber-700">We only sell to customers in Tasmania due to biosecurity regulations. We cannot ship plants interstate or overseas.</p>
      </div>

      <div class="bg-green-50 rounded-xl p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-2">Email</h2>
        <p class="text-gray-600">For general inquiries:</p>
        <p class="text-green-700 font-medium">info@redbreastplants.com</p>
      </div>
    </div>
  </div>
</div>`;

  return layout({
    title: 'Contact Redbreast Plants - Australian Native Plant Nursery',
    description: 'Contact Redbreast Plants for native Australian plants in Tasmania. Outlets in Margate and Flowerdale.',
    activePage: 'contact',
    content,
  });
}
