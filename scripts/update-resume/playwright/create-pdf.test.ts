import { expect, test } from "@playwright/test"
import { pdfDir } from "../../../src/lib/data/resume.js"

test("print new resume PDF", async ({ page }) => {
	await page.goto("/resume/print")
	expect(await page.textContent("h1")).toBe("Don Denton")

	await page.pdf({
		height: "10in",
		width: "8in",
		// This path is relative to the process, which should be started from the
		// root of the repo
		path: "./static" + pdfDir + "/NewResume.pdf",
	})
})

test("print new headshot PDF", async ({ page }) => {
	await page.goto("/resume/headshot-print")

	await page.pdf({
		height: "10in",
		width: "8in",
		// This path is relative to the process, which should be started from the
		// root of the repo
		path: "./static" + pdfDir + "/NewHeadshot.pdf",
	})
})
