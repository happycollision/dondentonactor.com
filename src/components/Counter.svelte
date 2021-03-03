<script lang="ts">
  let count: number = 0

  const increment = () => {
    count += 1
  }
</script>

<style>
  button:focus {
    @apply border-opacity-100;
  }

  button:active {
    @apply bg-opacity-20;
  }
</style>

<button
  class="py-4 px-8 text-red-500 bg-blue-500 bg-opacity-10 rounded-full border-2 border-transparent outline-none w-48 tabular-nums"
  on:click="{increment}">
  Clicks:
  {count}
</button>
