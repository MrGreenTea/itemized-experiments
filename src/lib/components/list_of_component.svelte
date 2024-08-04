<script lang="ts">
  export let component;
  export let items: any[];
  export let mapping;
</script>

<li class="divide-y divide-gray-100">
  {#each items as item}
    <ol>
      <svelte:component this={component} {item} {mapping} />
    </ol>
  {/each}
</li>
