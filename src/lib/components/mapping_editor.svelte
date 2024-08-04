<script lang="ts">
  type FieldMapping<
    InputFields extends readonly string[],
    OutputFields extends readonly string[],
  > = {
    [Output in OutputFields[number]]: InputFields[number];
  };
  export let input_fields: readonly string[];
  export let output_fields: readonly string[];
  export let mapping: FieldMapping<typeof input_fields, typeof output_fields>;
</script>

<div>
  {#each output_fields as field}
    <div>
      <label for={field}>{field}</label>
      <select id={field} bind:value={mapping[field]}>
        {#each input_fields as field}
          <option>{field}</option>
        {/each}
      </select>
    </div>
  {/each}
</div>
