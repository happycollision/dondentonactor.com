<script lang="ts">
	export let id: string
	export let title: string
</script>

<iframe
	title="{title}"
	src="https://player.vimeo.com/video/{id}"
	frameborder="0"
	allowfullscreen
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
></iframe>
