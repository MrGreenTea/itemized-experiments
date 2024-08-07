<script lang="ts">
  import MappedCard from "$lib/components/mapped_card.svelte";
  import TodoCard from "$lib/components/todo_card.svelte";
  import NoteCard from "$lib/components/note_card.svelte";

  import NoteIcon from "virtual:icons/material-symbols/edit-note";
  import EmailIcon from "virtual:icons/material-symbols/mail";
  import TodoIcon from "virtual:icons/material-symbols/bookmark-check-outline";

  const items = [
    {
      type: "Email" as const,
      content: {
        id: "Jonas",
        from: "Jonas",
        to: "Cool Guy",
        subject: "Hello from over here",
        content: "Such a lovely EMail",
      },
    },
    {
      type: "Note" as const,
      content: {
        id: 2,
        title: "Some thoughts",
        content: "I had a lot of fun with this note.",
      },
    },
    {
      type: "Todo" as const,
      content: {
        id: 3,
        title: "Get some milk",
        description: "I need to get some milk.",
      },
    },
  ] as const;
</script>

<ul class="space-y-4">
  {#each items as item}
    <li class="rounded-lg border-2">
      <h3
        class="text-white rounded-t-lg p-2 text-lg font-bold flex gap-x-2 items-center"
        class:bg-blue-600={item.type === "Email"}
        class:bg-green-600={item.type === "Note"}
        class:bg-red-600={item.type === "Todo"}
      >
        {#if item.type === "Email"}
          <EmailIcon />
        {:else if item.type === "Note"}
          <NoteIcon />
        {:else if item.type === "Todo"}
          <TodoIcon />
        {/if}
        {item.type}
      </h3>
      <div class="p-4">
        {#if item.type === "Email"}
          <MappedCard
            item={item.content}
            mapping={{
              title: "subject",
              description: "content",
              subtitle: "from",
              contact: "to",
            }}
          />
        {:else if item.type === "Note"}
          <NoteCard
            item={item.content}
            mapping={{
              title: "title",
              content: "content",
            }}
          />
        {:else if item.type === "Todo"}
          <TodoCard
            item={item.content}
            mapping={{
              title: "title",
              description: "description",
            }}
          />
        {/if}
      </div>
    </li>
  {/each}
</ul>
