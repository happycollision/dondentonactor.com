<script lang="ts">
  import { current } from "$data/appearances"
  import { SHORT_MONTHS, toDate, adjustDays } from "$utils/date"
  import type { SimpleDate } from "$utils/date"

  function readableDate(date: SimpleDate): string {
    return SHORT_MONTHS[date.month] + " " + date.day
  }

  const now = new Date()

  const future = current.filter((x) => toDate(x.end) > adjustDays(now, -1))
</script>

<style>
  section :global(a) {
    @apply text-blue-700 underline;
  }
</style>

{#if future.length > 0}
  <section class="bg-green-400 px-4 -mx-4 py-6">
    <h2 class="text-3xl font-sans font-bold max-w-4xl mx-auto mb-4">
      Current and Upcoming
    </h2>
    {#each future as appearance}
      <div class="max-w-prose m-auto text-2xl my-4">
        <div class="font-bold font-sans">
          {readableDate(appearance.start)}&ndash;{readableDate(appearance.end)}:
        </div>

        <div class="pl-4">
          {@html appearance.description}
        </div>
      </div>
    {/each}
  </section>
{/if}
