<script lang="ts">
  import { page } from "$app/stores"
  import MainNav from "$components/MainNav.svelte"
  import "./_global.pcss"

  $: path = $page.path
</script>

<header class="font-sans" hidden="{path === '/'}">
  <MainNav path="{path}" />
</header>

<div class="flex flex-col min-h-screen font-serif">
  <main class="m-4 flex-grow relative">
    <slot />
  </main>
  <footer class="bg-green-500 flex p-4 text-white justify-between">
    <div>Don Denton currently resides in Chattanooga, TN</div>

    <div>a Happy Collision website</div>
  </footer>
</div>
