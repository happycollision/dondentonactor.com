<script>
	import Markdown from "$components/Markdown.svelte"
	import Video from "$components/Video.svelte"
</script>

<div class="mx-auto max-w-2xl">
	<Markdown
		class="space-y-2"
		source="{`
If you'd like to see other parts of the script or other songs, let me know.

---Don
`}"
	/>

	<h3 class="mt-8 text-2xl font-sans">Greased Lightning</h3>

	<Video vimeo="841941720" title="Greased Lightning" height="{315}" width="{560}" />

	<h3 class="mt-8 text-2xl font-sans">Opening Scene</h3>

	<Video vimeo="841942087" title="Opening Scene" height="{315}" width="{560}" />
</div>
