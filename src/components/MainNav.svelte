<script lang="ts">
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
</script>

<style>
  li > :global(.active) {
    @apply bg-red-200;
  }
</style>

<nav>
  <ul class="m-auto max-w-3xl">
    <li><a use:active="{segment}" href="/">Don Denton</a></li>

    <li><a use:active="{segment}" rel="prefetch" href="/reel">Reel</a></li>
    <li><a use:active="{segment}" href="/resume">Resum&eacute;</a></li>
    <li><a use:active="{segment}" href="/media">Video/Audio</a></li>
    <li><a use:active="{segment}" href="/pictures">Pictures</a></li>
    <li><a use:active="{segment}" href="/bio">Biography</a></li>
    <li><a use:active="{segment}" href="/contact">Contact</a></li>
  </ul>
</nav>
