<script>
	import Markdown from "$components/Markdown.svelte"
	import Video from "$components/Video.svelte"
	import { pdfFile } from "$lib/data/resume"
</script>

<div class="mx-auto max-w-2xl">
	<h1 class="font-sans text-3xl">Audition for ECTC's 2023–2024 season</h1>

	<div class="flex flex-wrap gap-4 justify-between">
		<Markdown
			class="space-y-2 max-w-md"
			source="{`
Thanks for taking the time to view my audition video. Sherry Landrum asked me to submit for Doc Porter in Crimes of the Heart.

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

	<h3 class="mt-8 text-2xl font-sans">Monologue from Laughing Wild by Christopher Durang</h3>
	<Video vimeo="845782862" title="Laughing Wild" height="{280}" width="{500}" />
</div>
