<script>
  const allRoutes = import.meta.glob("./**/+page.svelte");
  const routes = Object.keys(allRoutes).map((r) =>
    r.replace("./", "").replace("+page.svelte", ""),
  );
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <ul class="gap-4 divide-y">
    {#each routes as route}
      <li class="py-2">
        <a class="text-xl text-blue-600" href={route}>{route}</a>
      </li>
    {/each}
  </ul>
</div>
