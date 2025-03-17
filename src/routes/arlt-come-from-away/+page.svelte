<script>
	import Markdown from "$components/Markdown.svelte"
	import Video from "$components/Video.svelte"
</script>

<h1 class="text-center text-4xl font-sans mb-2">Arrow Rock Lyceum Theatre</h1>
<p class="text-center text-2xl font-sans mb-4">Come from Away</p>

<div class="mx-auto max-w-2xl">
	<Markdown
		class="space-y-2"
		source="{`
Thanks so much for the opportunity to audition for _Come From Away_. What a great show.

I performed the bus scene as requested and I chose "Screech In" for the song.

I threw in a bonus scene for Oz at the bottom if you'd like to see it. It's such a funny moment from the show and I thought it'd be fun to prepare that, too.

---Don
`}"
	/>

	<h3 class="mt-8 text-2xl font-sans">Bus Drive from Gander</h3>
	<Video vimeo="1066671633" title="Bus Drive from Gander" height="{315}" width="{560}" />

	<h3 class="mt-8 text-2xl font-sans">Screech In</h3>
	<Video vimeo="1066671548" title="Screech In" height="{315}" width="{560}" />

	<h3 class="mt-8 text-2xl font-sans">Supplies from Shoppers</h3>
	<Video vimeo="1066671784" title="Supplies from Shoppers" height="{315}" width="{560}" />
</div>
