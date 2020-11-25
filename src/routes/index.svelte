<script>
</script>

<style>
  li a {
    @apply block p-2 relative;
  }
  li a:hover {
    @apply bg-blue-500 text-white;
  }

  li a:hover:before {
    content: "";
    position: absolute;
    background-color: inherit;
    @apply top-0 bottom-0 right-full w-screen -z-10;
  }

  li a:hover:after {
    content: "";
    position: absolute;
    background-color: inherit;
    @apply top-0 bottom-0 left-full w-screen -z-10;
  }

  h1 {
    line-height: 0.85;
  }
</style>

<header class="flex flex-row-reverse m-auto max-w-2xl font-sans">
  <nav>
    <h1 class="text-blue-500 text-7xl"><a href="/">Don Denton</a></h1>
    <ul class="ml-8 mt-2 font-thin text-4xl">
      <li><a href="/reel">Reel</a></li>
      <li><a href="/resume">Resum&eacute;</a></li>
      <li><a href="/media">Video/Audio</a></li>
      <li><a href="/pictures">Pictures</a></li>
      <li><a href="/bio">Biography</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  <div class="flex-grow flex justify-end">
    <div
      class="rounded-full h-112 w-112 overflow-hidden border-8 border-blue-500 relative top-4 left-4">
      <img
        class="object-cover h-112"
        src="http://dondentonactor.com/img/headshots/alt/large/grin.jpg"
        alt="Don's headshot" />
    </div>
  </div>
</header>
