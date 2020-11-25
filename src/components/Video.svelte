<script lang="ts">
  import YouTubeVideo from "./YouTubeVideo.svelte"

  export let width = 1920
  export let height = 1080
  export let youtube: string
  export let title: string

  const ratio = height / width
  const percent = ratio * 100
  const maxWidth = `max-width: calc(${100 / ratio}vh - 40px)`
</script>

<style>
  .wrapper {
    width: 100%;
    position: relative;
    padding: 0;
  }

  .wrapper > :global(iframe) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<div class="wrapper" style="{maxWidth}">
  <div style="padding-top: {percent}%"></div>
  <YouTubeVideo id="{youtube}" title="{title}" />
</div>
