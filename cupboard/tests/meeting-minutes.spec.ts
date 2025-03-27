import { test, expect } from "@playwright/test";

test("loads basic meeting minutes", async ({ page }) => {
  await page.goto("/meeting-minutes/basic");

  await expect(page.getByText("Agenda")).toBeVisible();
});
