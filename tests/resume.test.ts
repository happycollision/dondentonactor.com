import { expect, test } from "@playwright/test"

test("index page has expected h1", async ({ page }) => {
	await page.goto("/")
	expect(await page.textContent("h1")).toBe("Don Denton")
})

test("resume consistently renders two distinct headshots", async ({ page }) => {
	await page.goto("/resume")

	for (let attempt = 0; attempt < 5; attempt += 1) {
		const headshots = page.getByTestId("resume-headshots").locator("img")
		await expect(headshots).toHaveCount(2)

		const sources = await headshots.evaluateAll((images) =>
			images.map((image) => new URL((image as HTMLImageElement).currentSrc).pathname),
		)
		expect(new Set(sources).size).toBe(sources.length)

		await page.reload()
	}
})

for (const viewport of [
	{ width: 390, height: 844 },
	{ width: 768, height: 1024 },
	{ width: 1280, height: 900 },
]) {
	test(`resume headshots preserve the layout at ${viewport.width}px`, async ({ page }) => {
		await page.setViewportSize(viewport)
		await page.goto("/resume")

		const headshots = await page.getByTestId("resume-headshots").boundingBox()
		const resume = await page.locator(".resume").boundingBox()

		expect(headshots).not.toBeNull()
		expect(resume).not.toBeNull()
		if (!headshots || !resume) throw new Error("Expected resume layout elements")

		expect(headshots.y + headshots.height).toBeLessThanOrEqual(resume.y)
		expect(headshots.x).toBeGreaterThanOrEqual(0)
		expect(headshots.x + headshots.width).toBeLessThanOrEqual(viewport.width)
	})
}
