<script lang="ts">
  import { sources, all_sources } from "$lib/sources";

  let selected = sources[0];
  $: current_source = all_sources[selected];
  let selected_field: string;
</script>

<div>
  <select bind:value={selected}>
    {#each sources as source}
      <option>{source}</option>
    {/each}
  </select>

  <p>{selected}</p>
  <select bind:value={selected_field}>
    {#each current_source.fields as field}
      <option>{field}</option>
    {/each}
  </select>
  <div>
    <h1>{current_source.content[0][selected_field]}</h1>
  </div>
</div>
