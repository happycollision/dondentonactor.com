<script>
  import Img from "$components/Img.svelte"
  import Markdown from "$components/Markdown.svelte"
  import Video from "$components/Video.svelte"
</script>

<div class="mx-auto max-w-2xl">
  <Markdown
    class="space-y-2"
    source="{`
If you'd like to see other parts of my performance let me know.

---Don
`}"
  />

  <h3 class="mt-8 text-2xl font-sans">Who am I</h3>

  <Video vimeo="121582519" title="Who am I" height="{280}" width="{500}" />

  <h3 class="mt-8 text-2xl font-sans">Images from our production</h3>

  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div>
      <Img src="/img/shows/LesMiserables-04.jpg" alt="" />
    </div>
    <div>
      <Img src="/img/shows/LesMiserables-13.jpg" alt="" />
    </div>
    <div>
      <Img src="/img/shows/LesMiserables-10.jpg" alt="" />
    </div>
    <div>
      <Img src="/img/shows/LesMiserables-07.jpg" alt="" />
    </div>
  </div>
</div>
