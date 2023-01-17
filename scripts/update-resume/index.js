import { spawnSync } from "child_process"
import { bold, green } from "kleur/colors"
import path from "path"
import prompts from "prompts"
import { pdfLocation } from "../../src/lib/data/resume.js"

const pathToOldRes = path.join(process.cwd(), "static", pdfLocation)
const pathToNewRes = `${pathToOldRes}__new.pdf`

/**
 * @param {number} num
 */
function timeout(num) {
	return new Promise((res) => {
		setTimeout(res, num)
	})
}

/**
 * In this file, I need to
 *
 * 1. Start an interactive shell app
 * 2. Tell the user we are starting playwright to create a new pdf
 * 3. Open the old and new files in Finder/Preview for comparison
 * 4. Ask the user if we should keep the changes or not
 * 5. If "keep", rename the new file to overwrite the old. If "don't keep",
 *    delete the new file.
 */

const __dirname = new URL(".", import.meta.url).pathname

async function main() {
	if (process.cwd() !== path.resolve(path.join(__dirname, "..", ".."))) {
		// For the sake of playwright's paths
		console.log("You must run this command from the root of the repo.")

		process.exit(1)
	}

	console.log(
		"This script will run playwright to generate a new resumé PDF. The operation is not idempotent. Each time we create a new PDF, the diff for the file changes.\n\nSo you have to compare the old one with the new one when it's finished to know if you should actually update it. This CLI tool will walk you through the steps.\n\n",
	)

	const earlyExit = await prompts(
		[
			{
				type: "confirm",
				name: "continue",
				message: "Ready to begin?",
				initial: true,
			},
		],
		{ onCancel: () => process.exit(1) },
	)

	if (!earlyExit.continue) process.exit()

	console.log(bold("Running playwright now..."))
	await timeout(1000)

	spawnSync(
		"npx",
		["playwright", "test", "--config=./scripts/update-resume/playwright.config.ts"],
		{ stdio: "inherit" },
	)

	console.log(green(bold("Puppeteer complete!")))
	console.log()
	console.log(
		"Time to compare the new PDF to the old. The new PDF has the same name as the old one, but with `__new.pdf`.",
	)

	const { ready } = await prompts(
		[{ type: "confirm", name: "ready", message: "Ready?", initial: true }],
		{
			onCancel: () => process.exit(1),
		},
	)

	if (!ready) {
		console.log(
			"Ok, well. Be sure to compare the new PDF to the old one and manually choose which you want to keep.",
		)

		process.exit(1)
	}

	console.log("Opening Finder...")

	spawnSync("open", [path.dirname(pathToNewRes)])

	const keep = await prompts(
		[
			{
				type: "select",
				name: "which",
				message: "What would you like to do?",
				choices: [
					{ title: "Use the new resumé", value: "new" },
					{ title: "Keep the old resumé", value: "old" },
				],
			},
		],
		{ onCancel: () => process.exit(1) },
	)

	if (keep.which === "new") {
		console.log("Overwriting the old resumé with the new one...")
		spawnSync("mv", [pathToNewRes, pathToOldRes], { stdio: "inherit" })
	} else {
		console.log("Removing the new resumé...")
		spawnSync("rm", [pathToNewRes], { stdio: "inherit" })
	}

	console.log(bold(green("Done!")))
}

main()
