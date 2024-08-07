<script lang="ts">
  import ListOfComponent from "$lib/components/list_of_component.svelte";
  import MappedCard, { schema } from "$lib/components/mapped_card.svelte";
  import MappingEditor from "$lib/components/mapping_editor.svelte";

  const input_fields = ["id", "name", "age", "description"] as const;
  const output_fields = Object.keys(schema.properties);

  const items: { [key in (typeof input_fields)[number]]: any }[] = [
    {
      id: 1,
      name: "Jonas",
      description: "pretty awesome guy",
      age: 23,
    },
    {
      id: 2,
      name: "Cool Guy",
      description: "very cool guy",
      age: 42,
    },
    {
      id: 3,
      name: "Cute Baby",
      description: "a very cute baby",
      age: 2,
    },
  ];

  let mapping = {
    title: "name",
    description: "description",
    subtitle: "age",
    contact: "id",
  };
</script>

<div class="mx-auto max-w-4xl">
  <MappingEditor bind:mapping {input_fields} {output_fields} />
  <ListOfComponent component={MappedCard} {items} {mapping} />
</div>
