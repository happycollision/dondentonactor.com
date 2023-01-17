import { expect, test } from "@playwright/test"

test("index page has expected h1", async ({ page }) => {
	await page.goto("/")
	expect(await page.textContent("h1")).toBe("Don Denton")
})

test("print resume", async ({ page }) => {
	await page.goto("/resume/print")
	expect(await page.textContent("h1")).toBe("Don Denton")

	await page.pdf({
		height: "10in",
		width: "8in",
		path: "./static/documents/DonDenton_Headshot_Resume.pdf",
	})
})
