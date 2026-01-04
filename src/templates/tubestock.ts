import { layout } from './layout';

export function tubestockPage(): string {
  const content = `
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-3xl font-bold text-gray-900 mb-4">Australian Native Plant Tubestock</h1>
  <p class="text-xl text-gray-600 mb-8">Specialist propagators of native plants for revegetation, landscaping, and home gardens</p>

  <div class="grid md:grid-cols-3 gap-8">
    <div class="md:col-span-2 space-y-6">
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">What is Tubestock?</h2>
        <p class="text-gray-600">Tubestock are young plants grown in narrow, deep tubes (typically 50mm x 50mm x 120mm). This growing method produces plants with a strong, well-developed root system that establishes quickly once planted.</p>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Benefits of Tubestock</h2>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><strong>Cost effective</strong> - More affordable than advanced plants</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><strong>Better establishment</strong> - Young plants adapt more easily</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><strong>Strong roots</strong> - Deep tubes encourage downward root growth</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><strong>Easy handling</strong> - Light and easy to transport in bulk</span>
          </li>
          <li class="flex items-start gap-2">
            <svg class="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><strong>Ideal for revegetation</strong> - Perfect for large-scale planting</span>
          </li>
        </ul>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Our Propagation</h2>
        <p class="text-gray-600">We propagate thousands of native plants each year at our Flowerdale nursery in northern Tasmania. Our plants are grown from seed or cuttings sourced from Tasmanian and mainland Australian stock.</p>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Bulk Orders</h2>
        <p class="text-gray-600 mb-4">We can supply bulk quantities of tubestock for:</p>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 mb-6">
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Councils and government
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Landcare groups
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Revegetation projects
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Landscaping contractors
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Farm windbreaks
          </li>
        </ul>
        <a href="/contact" class="inline-block text-green-700 font-medium hover:text-green-800">Contact Us for Bulk Pricing &rarr;</a>
      </div>

      <div class="bg-green-50 rounded-xl p-6 text-center">
        <h2 class="text-lg font-semibold text-gray-900 mb-2">Browse Our Plants</h2>
        <p class="text-gray-600 mb-4">We have over 500 varieties of Australian native plants available.</p>
        <a href="/plant-list" class="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors">
          View Plant List
        </a>
      </div>
    </div>

    <div class="space-y-6">
      <div class="bg-green-700 text-white rounded-xl p-6">
        <h3 class="text-lg font-semibold mb-2">Flowerdale Nursery</h3>
        <p class="text-green-100 mb-4">Main Propagation Site</p>
        <p class="text-sm text-green-100">242 Robin Hill Road<br>Flowerdale TAS 7325</p>
        <p class="text-sm text-green-100 mt-2">Phone: +61 419 871 784</p>
      </div>

      <div class="bg-amber-50 rounded-xl p-6 border border-amber-200">
        <h3 class="text-lg font-semibold text-amber-800 mb-2">Tasmania Only</h3>
        <p class="text-amber-700">Due to biosecurity regulations, we can only sell plants to customers within Tasmania.</p>
      </div>

      <img src="/assets/images/tubestock-pots.jpg" alt="Native plant tubestock" class="rounded-xl shadow-md w-full">
    </div>
  </div>
</div>`;

  return layout({
    title: 'Australian Native Plant Tubestock - Redbreast Plants Tasmania',
    description: 'Buy Australian native plant tubestock from Redbreast Plants in Tasmania. Ideal for revegetation, landscaping, bulk orders. Over 500 varieties available.',
    activePage: '',
    content,
  });
}
