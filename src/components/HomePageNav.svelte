<script lang="ts">
  import Img from "./Img.svelte"
  import { mainNav } from "$data/nav"
</script>

<style>
  li a:hover:before {
    content: "";
    position: absolute;
    background-color: inherit;
    @apply top-0 bottom-0 right-full w-screen;
  }

  li a:hover:after {
    content: "";
    position: absolute;
    background-color: inherit;
    @apply top-0 bottom-0 left-full w-screen;
  }

  h1 {
    line-height: 0.85;
  }
</style>

<header
  class="flex flex-row lg:flex-row-reverse m-auto max-w-4xl font-sans mb-8 sm:justify-center"
>
  <nav>
    <h1 class="text-blue-500 dark:text-blue-900 text-5xl lg:text-7xl">
      <a href="/">Don Denton</a>
    </h1>
    <ul class="lg:ml-8 mt-2 font-thin text-2xl tracking-wider lg:text-4xl">
      {#each mainNav as navItem, i}
        <li>
          <a
            class:mt-12="{i == mainNav.length - 1}"
            class="block p-2 relative hover:bg-blue-500 hover:text-white dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-gray-200"
            rel="prefetch"
            href="{navItem.url}">{@html navItem.name}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
  <div class="flex-grow max-w-md">
    <div
      class="ratio-square-container w-full -left-4 sm:-left-8 top-4 lg:left-4"
      style="min-width: 250px"
    >
      <div
        class="rounded-full overflow-hidden border-8 border-blue-500 dark:border-blue-900 bg-black"
      >
        <Img
          class="object-cover h-full dark:opacity-70"
          src="/img/headshots/grin.jpg"
          alt="Don's headshot"
        />
      </div>
    </div>
  </div>
</header>
