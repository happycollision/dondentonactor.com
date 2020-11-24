<script>
  import "./_global.pcss"
</script>

<div class="flex flex-col justify-between min-h-screen font-sans">
  <main class="m-4">
    <slot />
  </main>
  <footer class="bg-green-500 flex p-4 text-white justify-between">
    <div>Don Denton currently resides in Chattanooga, TN</div>

    <div>a Happy Collision website</div>
  </footer>
</div>
