<script lang="ts">
  import { page } from "$app/stores"
  import MainNav from "$components/MainNav.svelte"
  import "./_global.pcss"

  $: path = $page.path
</script>

<div class="flex flex-col min-h-screen">
  <header class="font-sans" hidden="{path === '/'}">
    <MainNav path="{path}" />
  </header>

  <div class="flex-grow font-serif dark:bg-black">
    <main class="m-4 relative">
      <slot />
    </main>
  </div>
  <footer
    class="bg-green-500 text-white dark:bg-green-900 dark:text-gray-300 flex p-4 justify-between"
  >
    <div>
      <a class="underline" href="mailto:don@dondentonactor.com"
        >don@dondentonactor.com</a
      >
    </div>

    <div>
      a <a class="underline" href="http://happycollision.com">Happy Collision</a
      > website
    </div>
  </footer>
</div>
