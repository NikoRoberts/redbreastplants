import { layout } from './layout';

export function hobartPage(): string {
  const content = `
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-3xl font-bold text-gray-900 mb-4">Australian Native Plant Nursery Near Hobart</h1>
  <p class="text-xl text-gray-600 mb-8">Quality native plants for over 40 years, just 20 minutes from Hobart CBD</p>

  <div class="grid md:grid-cols-3 gap-8">
    <div class="md:col-span-2 space-y-6">
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Our Margate Location</h2>
        <p class="text-gray-600 mb-4">Our Margate outlet is conveniently located just 20 minutes south of Hobart CBD, making it easy for southern Tasmanians to access our wide range of native plants.</p>
        <dl class="space-y-2 text-gray-600">
          <div><strong>Address:</strong> 1709 Channel Hwy, Margate TAS 7054</div>
          <div><strong>Phone:</strong> +61 3 6267 2871</div>
        </dl>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Why Choose Native Plants?</h2>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><strong>Low maintenance</strong> - Adapted to local conditions</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><strong>Water-wise</strong> - Many drought tolerant once established</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><strong>Wildlife habitat</strong> - Attract native birds and insects</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><strong>Local character</strong> - Complement Tasmania's landscape</span>
          </li>
        </ul>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Our Plant Range</h2>
        <p class="text-gray-600 mb-4">We stock over 500 varieties of Australian native plants, including:</p>
        <ul class="grid grid-cols-2 gap-2 text-gray-600">
          <li>Tasmanian endemic species</li>
          <li>Groundcovers and grasses</li>
          <li>Screening plants</li>
          <li>Flowering shrubs</li>
          <li>Native trees</li>
          <li>Coastal plants</li>
        </ul>
        <a href="/plant-list" class="inline-block mt-4 text-green-700 font-medium hover:text-green-800">Browse Our Full Plant List &rarr;</a>
      </div>
    </div>

    <div class="space-y-6">
      <div class="bg-green-700 text-white rounded-xl p-6">
        <h3 class="text-lg font-semibold mb-2">Visit Us</h3>
        <p class="text-green-100 mb-4">Margate Outlet</p>
        <p class="text-sm text-green-100">1709 Channel Hwy<br>Margate TAS 7054</p>
        <p class="text-sm text-green-100 mt-2">Phone: +61 3 6267 2871</p>
      </div>

      <img src="/assets/images/hobart-native-plant-nursery-1.jpg" alt="Native plants near Hobart" class="rounded-xl shadow-md w-full">
    </div>
  </div>
</div>`;

  return layout({
    title: 'Australian Native Plant Nursery Near Hobart - Redbreast Plants',
    description: 'Find Australian native plants near Hobart at Redbreast Plants Margate outlet. Over 500 varieties, expert advice, 40+ years experience.',
    activePage: '',
    content,
  });
}
