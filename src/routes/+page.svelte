<script lang="ts">
  import ListOfComponent from "$lib/components/list_of_component.svelte";
  import MappedCard from "$lib/components/mapped_card.svelte";

  const fields = ["id", "name", "age", "description"] as const;

  const items: { [key in (typeof fields)[number]]: any }[] = [
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
  <div>
    <div>
      <label for="title">Title</label>
      <select id="title" bind:value={mapping.title}>
        {#each fields as field}
          <option>{field}</option>
        {/each}
      </select>
    </div>

    <div>
      <label for="description">Description</label>
      <select id="description" bind:value={mapping.description}>
        {#each fields as field}
          <option>{field}</option>
        {/each}
      </select>
    </div>

    <div>
      <label for="subtitle">Subtitle</label>
      <select id="subtitle" bind:value={mapping.subtitle}>
        {#each fields as field}
          <option>{field}</option>
        {/each}
      </select>
    </div>

    <div>
      <label for="contact">Contact</label>
      <select id="contact" bind:value={mapping.contact}>
        {#each fields as field}
          <option>{field}</option>
        {/each}
      </select>
    </div>
  </div>

  <ListOfComponent component={MappedCard} {items} {mapping} />
</div>
