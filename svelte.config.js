import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/kit/vite"

import { preprocess as compilerPreprocess } from "svelte/compiler"
import image from "svelte-image"

const imagePreprocessor = image({
	// @ts-expect-error bad type inference
	processFolders: ["img"],
	processFoldersRecursively: true,
	// @ts-expect-error bad type inference
	processFoldersSizes: [400, 800, 1200],
	processFoldersExtensions: ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"],
})

// There is some kind of race condition between the preprocessor and the adapter
// such that any images created in the `static/g/` folder aren't present on the
// first run of `npm run build`. Since this project only relies upon the
// recursive folder image processing done by svelte-image, we can just feed it
// one fake template when this file is loaded. By the time the actual adapter is
// run, the images will already be in place.
//
// This is a hack, to be sure. Perhaps when SvelteKit hits 1.0, this won't be a
// problem anymore? To reproduce the actual issue, comment out the next line
// (since it is the workaround) and run `npm run clean && npm run build`. If you
// don't get any 404 errors from Pretender, then the bug is gone.
imagePreprocessor.markup({ content: "<html/>" })

function runImagesAfterOthers(otherProcessors) {
	return {
		markup: async ({ content, filename }) => {
			const otherProcessorsReturn = await compilerPreprocess(content, otherProcessors, { filename })
			content = otherProcessorsReturn.code

			const { code } = await imagePreprocessor.markup({ content })
			return {
				...otherProcessorsReturn,
				code,
			}
		},
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		runImagesAfterOthers(
			preprocess({
				defaults: {
					style: "postcss",
				},
				postcss: true,
			}),
		),
	],

	kit: {
		adapter: adapter(),
		alias: {
			// The built-in `$lib` alias is controlled by `config.kit.files.lib` as it
			// is used for packaging.

			$components: "src/components",
		},
	},
}

export default config
