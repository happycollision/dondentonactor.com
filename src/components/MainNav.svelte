<script lang="ts">
	import { mainNav } from "$lib/data/nav"

	export let path: string | null

	function nodeIsActive(node: HTMLAnchorElement, path: string | null) {
		return new URL(node.href).pathname === path
	}

	function manageNodeActiveClass(node: HTMLAnchorElement, path: string | null) {
		if (nodeIsActive(node, path)) {
			node.setAttribute("aria-active", "page")
		} else {
			node.removeAttribute("aria-active")
		}
	}

	function active(node: HTMLAnchorElement, path: string | null) {
		manageNodeActiveClass(node, path)

		return {
			update(path: string) {
				manageNodeActiveClass(node, path)
			},
		}
	}

	$: showMenu = false
</script>

<nav class="px-4 text-white bg-blue-500 dark:bg-blue-900 dark:text-gray-300">
	<ul class="flex flex-wrap m-auto max-w-4xl items-baseline">
		<li class="flex-grow w-full md:w-auto flex justify-between items-baseline">
			<a class="py-2 text-2xl block" use:active="{path}" href="/">Don Denton</a>
			<label
				class="cursor-pointer px-3 -mr-3 py-2 block md:hidden hover:bg-green-500 hover:border-green-500 dark:hover:bg-green-900 dark:hover:border-green-900"
			>
				{showMenu ? "Hide" : "Show"}
				Menu
				<input bind:checked="{showMenu}" type="checkbox" hidden />
			</label>
		</li>
		{#each mainNav as navItem}
			<li class:sr-only="{!showMenu}" class="md:not-sr-only">
				<a
					class="block px-3 py-1 border-b-2 border-transparent hover:bg-green-500 hover:border-green-500 dark:hover:bg-green-900 dark:hover:border-green-900
            
            {navItem.url === path ? 'border-b-2 border-green-500 dark:border-green-900' : ''}
          "
					use:active="{path}"
					rel="prefetch"
					href="{navItem.url}">{@html navItem.name}</a
				>
			</li>
		{/each}
		<li class:sr-only="{!showMenu}" class="md:not-sr-only">
			<a
				class="block px-3 py-1 border-b-2 border-transparent hover:underline"
				href="mailto:don@dondentonactor.com">don@dondentonactor.com</a
			>
		</li>
	</ul>
</nav>
