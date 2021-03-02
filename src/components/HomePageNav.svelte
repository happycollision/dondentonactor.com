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

<header class="m-auto max-w-4xl font-sans mb-8">
  <nav>
    <h1
      class="text-blue-500 dark:text-blue-900 text-5xl lg:text-7xl text-center sm:text-right sm:-mb-12 lg:max-w-3xl max-w-lg m-auto"
    >
      <a href="/">Don Denton</a>
    </h1>

    <div class="flex flex-row-reverse justify-center -ml-20 sm:-ml-0">
      <ul class="lg:ml-8 mt-12 font-thin text-2xl tracking-wider lg:text-4xl">
        {#each mainNav as navItem, i}
          <li>
            <a
              class="block p-2 relative hover:bg-blue-500 hover:text-white dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-gray-200"
              rel="prefetch"
              href="{navItem.url}">{@html navItem.name}</a
            >
          </li>
        {/each}
      </ul>

      <div class="flex-grow max-w-xs">
        <div
          class="ratio-square-container w-full sm:-left-8 top-4 lg:left-4"
          style="min-width: 250px"
        >
          <div
            class="rounded-full overflow-hidden border-8 border-blue-500 dark:border-blue-900 bg-black"
          >
            <Img
              class="object-cover h-full dark:opacity-70 flip"
              src="/img/headshots/grin.jpg"
              alt="Don's headshot"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="text-right mt-4">
    <a
      class="text-gray-400 dark:text-gray-500"
      href="mailto:don@dondentonactor.com">don@dondentonactor.com</a
    >
  </div>
</header>
