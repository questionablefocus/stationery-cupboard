import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Stationery Cupboard/);
});

test("has installation instructions", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByText("npm install @questionablefocus/stationery-cupboard")
  ).toBeVisible();
});
