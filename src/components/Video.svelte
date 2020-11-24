<script lang="ts">
  export let width = 1920
  export let height = 1080
  export let src: string
  export let title: string

  const ratio = height / width
  const percent = ratio * 100
</script>

<style>
  .wrapper {
    width: 100%;
    position: relative;
    padding: 0;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<div class="wrapper" style="max-width: {100 / ratio}vh">
  <div style="padding-top: {percent}%"></div>
  <iframe title="{title}" src="{src}" frameborder="0" allowfullscreen></iframe>
</div>
