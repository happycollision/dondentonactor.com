<script lang="ts">
	import { page } from "$app/stores"
	import MainNav from "$components/MainNav.svelte"
	import "../app.postcss"

	$: path = $page.route.id

	const hideHeaderPaths: Array<typeof path> = ["/", "/resume/print", "/resume/headshot-print"]
	const hideFooterPaths: Array<typeof path> = ["/resume/print", "/resume/headshot-print"]
</script>

<div class="flex flex-col min-h-screen">
	{#if !hideHeaderPaths.includes(path)}
		<header class="font-sans">
			<MainNav path="{path}" />
		</header>
	{/if}

	<div class="flex-grow font-serif dark:bg-black">
		<main class="m-4 relative">
			<slot />
		</main>
	</div>

	{#if !hideFooterPaths.includes(path)}
		<footer
			class="hidden bg-green-500 text-white dark:bg-green-900 dark:text-gray-300 xs:flex p-4 justify-between"
		>
			<div>
				<a class="underline" href="mailto:don@dondentonactor.com">don@dondentonactor.com</a>
			</div>

			<div>
				a <a class="underline" href="http://happycollision.com">Happy Collision</a> website
			</div>
		</footer>
	{/if}
</div>
