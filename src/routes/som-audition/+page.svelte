<script>
	import Markdown from "$components/Markdown.svelte"
	import Video from "$components/Video.svelte"
	import { pdfFile } from "$lib/data/resume"
</script>

<div class="mx-auto max-w-2xl">
	<h1 class="font-sans text-3xl">Audition: The Sound of Music</h1>
	<h2 class="font-sans text-2xl mb-12">Don as Captain von Trapp</h2>

	<div class="flex flex-wrap gap-4 justify-between">
		<Markdown
			class="space-y-2 max-w-md"
			source="{`
Thanks for taking the time to view my audition video. The first video below is my introduction, and the second video is the actual performance.

---Don
`}"
		/>

		<div>
			<a
				class="inline-flex justify-center px-2 py-4 bg-blue-600 text-white rounded hover:bg-blue-400 max-w-[160px] text-center font-sans"
				href="{pdfFile}"
				download>Download Don's Headshot/Resumé</a
			>
		</div>
	</div>

	<h3 class="mt-8 text-2xl font-sans">Introduction</h3>
	<Video vimeo="791559777" title="Introduction" height="{280}" width="{500}" />

	<h3 class="mt-8 text-2xl font-sans">Edelweiss</h3>
	<Video vimeo="791559839" title="Edelweiss" height="{280}" width="{500}" />
</div>
