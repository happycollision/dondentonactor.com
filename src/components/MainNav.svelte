<script lang="ts">
  import { mainNav } from "$data/nav"

  export let segment: string

  function nodeIsActive(node: HTMLAnchorElement, segment: string) {
    const path = new URL(node.href).pathname.slice(1).split("/").shift()

    return path === "" ? segment === undefined : path === segment
  }

  function manageNodeActiveClass(node: HTMLAnchorElement, segment: string) {
    if (nodeIsActive(node, segment)) {
      node.classList.add("active")
      // TODO add aria-active="page"
    } else {
      node.classList.remove("active")
      // TODO add aria-active="page"
    }
  }

  function active(node: HTMLAnchorElement, segment: string) {
    manageNodeActiveClass(node, segment)

    return {
      update(segment: string) {
        manageNodeActiveClass(node, segment)
      },
    }
  }

  $: showMenu = false
</script>

<style>
  li > :global(.active) {
    @apply border-green-500 border-b-2;
  }
</style>

<nav class="px-4 bg-blue-500 text-white">
  <ul class="flex flex-wrap m-auto max-w-4xl items-baseline">
    <li class="flex-grow w-full md:w-auto flex justify-between items-baseline">
      <a class="py-2 text-2xl block" use:active="{segment}" href="/">Don Denton</a>
      <label class="cursor-pointer py-2 block md:hidden">
        {showMenu ? 'Hide' : 'Show'}
        Menu
        <input bind:checked="{showMenu}" type="checkbox" hidden />
      </label>
    </li>
    {#each mainNav as navItem}
      <li class:sr-only="{!showMenu}" class="md:not-sr-only">
        <a
          class="block px-4 py-1 border-b-2 border-blue-500 hover:bg-green-500 hover:border-green-500"
          use:active="{segment}"
          rel="prefetch"
          href="{navItem.url}">{@html navItem.name}</a>
      </li>
    {/each}
  </ul>
</nav>
