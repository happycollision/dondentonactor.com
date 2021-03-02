<script lang="ts">
  import SoundCloud from "$components/SoundCloud.svelte"
  import Video from "$components/Video.svelte"
</script>

<div class="grid grid-cols-1 gap-4 max-w-xl m-auto md:grid-cols-2 md:max-w-4xl">
  <div>
    <h3 class="text-lg font-bold">Don's Reel</h3>
    <Video
      title="Don's Reel"
      youtube="EouuLrgoMh4"
      width="{560}"
      height="{315}"
    />
  </div>

  <div>
    <h3 class="text-lg font-bold">On the Streets of Dublin (full song)</h3>
    <Video
      title="The Streets of Dublin (full song)"
      youtube="mWU4wxTL-7k"
      width="{560}"
      height="{315}"
    />
  </div>
</div>

<div class="space-y-8 my-8 max-w-xl m-auto md:grid-cols-2 md:max-w-4xl">
  <div class="media-content audio">
    <h3 class="text-lg font-bold">I'll Be There (32 bar cut)</h3>
    <SoundCloud title="I'll Be There (32 bar cut)" id="147169519" />
  </div>

  <div class="media-content audio">
    <h3 class="text-lg font-bold">Younger Than Springtime (16 bar cut)</h3>
    <SoundCloud title="Younger than Springtime (16 bar cut)" id="170091835" />
  </div>

  <div class="media-content audio">
    <h3 class="text-lg font-bold">I'm So Lonesome I Could Cry</h3>
    <p>
      The classic Hank Williams tune, sung not so much &ldquo;as Hank&rdquo; as
      in <em>Hank Williams:Lost Highway</em>, but slightly more in Don's own
      voice. Guitar and vocals by Don Denton.
    </p>
    <SoundCloud title="I'm So Lonesome I Could Cry" id="197236920" />
  </div>
</div>
