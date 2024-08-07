<script context="module" lang="ts">
  export const schema = {
    title: "MappedCard",
    type: "object",
    properties: {
      title: { type: "string" },
      description: { type: "string" },
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

<div class="relative flex items-start">
  <div class="flex h-6 items-center">
    <input
      id="comments"
      aria-describedby="comments-description"
      name="comments"
      type="checkbox"
      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    />
  </div>
  <div class="ml-3 text-sm leading-6">
    <label for="comments" class="font-medium text-gray-900"
      >{item[mapping.title]}</label
    >
    <p id="comments-description" class="text-gray-500">
      {item[mapping.description]}
    </p>
  </div>
</div>
