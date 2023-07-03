<script>
	import Markdown from "$components/Markdown.svelte"
	import Video from "$components/Video.svelte"
</script>

<div class="mx-auto max-w-2xl">
	<Markdown
		class="space-y-2"
		source="{`
Mr. Hesselman,

Thanks for taking a moment to view my video. Kim and Denny both speak very highly of you and I hope we do have get a chance to work together soon!

---Don

`}"
	/>

	<Video vimeo="841942213" title="The Sadder But Wiser Girl" height="{315}" width="{560}" />
</div>
