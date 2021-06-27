<script lang="ts" context="module">
	import { markdown } from "$lib/utils/markdown"
	const defaultClasses = {
		a: "link",
	}
</script>

<script lang="ts">
	export let source: string
	export let embededClasses = defaultClasses
	let className = ""
	export { className as class }
</script>

<div class="via-markdown {className}">
	{@html markdown(source, embededClasses)}
</div>
