<script lang="ts">
  import type { Item } from "$lib/types";
  export let component;
  export let items: Item[];
  export let mapping;
</script>

<ul class="divide-y divide-gray-100">
  {#each items as item}
    <li>
      <svelte:component this={component} {item} {mapping} />
    </li>
  {/each}
</ul>
