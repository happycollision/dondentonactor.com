<script lang="ts">
	export let title: string
	export let id: string
</script>

<iframe
	title="Audio Player: {title}"
	width="100%"
	height="166"
	scrolling="no"
	frameborder="no"
	src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{id}&amp;color=6b90b5&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false"
></iframe>
