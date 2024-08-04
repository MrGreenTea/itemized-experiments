<script lang="ts">
  import type { Item } from "$lib/types";

  export let item: Item;
  export let mapping: {
    title: keyof typeof item;
    description: keyof typeof item;
    subtitle: keyof typeof item;
    contact: keyof typeof item;
  };
</script>

<div class="flex justify-between gap-x-6 py-5">
  <div class="flex min-w-0 gap-x-4">
    <img
      class="h-12 w-12 flex-none rounded-full bg-gray-50"
      src="https://i.pravatar.cc/256?u={item.id}"
      alt="Portrait"
      loading="lazy"
      decoding="async"
    />
    <div class="min-w-0 flex-auto">
      <p class="text-sm font-semibold leading-6 text-gray-900">
        {item[mapping.title]}
      </p>
      <p class="mt-1 truncate text-xs leading-5 text-gray-500">
        {item[mapping.description]}
      </p>
    </div>
  </div>
  <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
    <p class="text-sm leading-6 text-gray-900">{item[mapping.subtitle]}</p>
    <p class="mt-1 text-xs leading-5 text-gray-500">
      {item[mapping.contact]}
    </p>
  </div>
</div>
