<script context="module" lang="ts">
  export const schema = {
    title: "MappedCard",
    type: "object",
    properties: {
      title: { type: "string" },
      content: { type: "string" },
    },
  };
</script>

<script lang="ts" generics="I extends Item">
  import type { Item } from "$lib/types";

  export let item: I;

  type Mapping = {
    [key in keyof (typeof schema)["properties"]]: keyof I;
  };
  export let mapping: Mapping;
</script>

<div>
  <label for="note" class="block text-sm font-medium leading-6 text-gray-900">
    {item[mapping.title]}
  </label>
  <div class="mt-2">
    <textarea
      rows="4"
      name="note"
      id="note"
      bind:value={item[mapping.content]}
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
</div>
