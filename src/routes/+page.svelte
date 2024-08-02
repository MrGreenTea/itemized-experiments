<script lang="ts">
  const sources = ["Mail", "Contacts", "Calendar", "Notes"] as const;
  type Source = {
    fields: string[];
    content: Record<string, string>;
  };
  const all_sources: { [key in (typeof sources)[number]]: Source } = {
    Mail: {
      fields: ["From", "To", "Subject", "Body"],
      content: {
        From: "Rebecca",
        To: "Jonas",
        Subject: "Hallo",
        Body: "Gute Nachricht.",
      },
    },
    Contacts: {
      fields: ["Name", "Email", "Phone", "Address"],
      content: {
        Name: "Rebecca",
        Email: "Rebecca@me.com",
        Phone: "123456789",
        Address: "Somewhere",
      },
    },
    Calendar: {
      fields: ["Date", "Time", "Title", "Description"],
      content: {
        Date: "2022-01-01",
        Time: "12:00",
        Title: "Rebecca treffen",
        Description: "Einen schönen Abend.",
      },
    },
    Notes: {
      fields: ["Title", "Body"],
      content: {
        Title: "Meine Ideen",
        Body: "Gute Ideen.",
      },
    },
  };
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
    <h1>{current_source.content[selected_field]}</h1>
  </div>
</div>
