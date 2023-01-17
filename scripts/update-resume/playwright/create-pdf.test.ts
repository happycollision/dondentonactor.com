import { expect, test } from "@playwright/test"
import { pdfLocation } from "../../../src/lib/data/resume.js"

test("print new resume PDF", async ({ page }) => {
	await page.goto("/resume/print")
	expect(await page.textContent("h1")).toBe("Don Denton")

	await page.pdf({
		height: "10in",
		width: "8in",
		// This path is relative to the process, which should be started from the
		// root of the repo
		path: "./static" + pdfLocation + "__new.pdf",
	})
})
