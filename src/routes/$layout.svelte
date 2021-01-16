<script lang="ts">
  import { page } from "$app/stores"
  import MainNav from "$components/MainNav.svelte"
  import "./_global.pcss"

  $: path = $page.path
</script>

<header class="font-sans" hidden="{path === '/'}">
  <MainNav path="{path}" />
</header>

<div class="flex flex-col min-h-screen font-serif dark:bg-black">
  <main class="m-4 flex-grow relative">
    <slot />
  </main>
  <footer
    class="bg-green-500 text-white dark:bg-green-900 dark:text-gray-300 flex p-4 justify-between"
  >
    <div>Don Denton currently resides in Chattanooga, TN</div>

    <div>a Happy Collision website</div>
  </footer>
</div>
