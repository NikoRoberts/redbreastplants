import { layout } from './layout';

export function aboutPage(): string {
  const content = `
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-3xl font-bold text-gray-900 mb-8">Our Story</h1>

  <div class="grid md:grid-cols-3 gap-8">
    <div class="md:col-span-2 space-y-8">
      <section class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">History</h2>
        <div class="prose prose-green text-gray-600 space-y-3">
          <p>Redbreast Plants was first known as Robin Hill Trees. It was started by Barney Roberts as a hobby away from dairy farming, in the mid 1970s.</p>
          <p>Barney's sons Bruce and Max continued managing the Nursery after Barney retired. During the 1990s the Nursery was renamed to Redbreast Nurseries and opened two outlets in Margate (near Hobart) and Legana (near Launceston).</p>
          <p>In the late 1990s the Legana outlet was closed due to tightening markets.</p>
          <p>In 2004 Redbreast Nurseries was renamed to Redbreast Plants.</p>
        </div>
      </section>

      <section class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Our Plants</h2>
        <p class="text-gray-600">Redbreast Plants currently has over 500 plants in its database and previously cultivated the large majority of these. All of the plants are Australian Natives suited to Tasmanian growing conditions.</p>
      </section>

      <section class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Our People</h2>
        <p class="text-gray-600">Over the years Redbreast Plants has employed many plant enthusiasts. The Nurseries are kept running by a variety of talented and motivated individuals who love working with plants and increasing their knowledge about them.</p>
      </section>

      <section class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Our Locations</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold text-gray-900">Robin Hill - Flowerdale</h3>
            <p class="text-gray-600">Robin Hill was acquired by Barney Roberts in 1947. It was a property close to his family home Currajong, also in Flowerdale. This is where our main propagation nursery operates today.</p>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Margate</h3>
            <p class="text-gray-600">Margate was acquired by Bruce and Max Roberts in the early 1990s as an outlet for Redbreast Plants, to service the Hobart area.</p>
          </div>
        </div>
      </section>
    </div>

    <div class="space-y-6">
      <img src="/assets/images/DSC_2818small.jpg" alt="Working with native plants" class="rounded-xl shadow-md w-full">
      <img src="/assets/images/DSC_2824small.jpg" alt="Plant nursery" class="rounded-xl shadow-md w-full">
    </div>
  </div>
</div>`;

  return layout({
    title: 'About Redbreast Plants - Australian Native Nursery Tasmania',
    description: 'Learn about the history of Redbreast Plants, a family-owned Tasmanian native plant nursery since the 1970s.',
    activePage: 'about',
    content,
  });
}
