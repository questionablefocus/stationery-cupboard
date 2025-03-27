import { test, expect } from "@playwright/test";

test("loads simple invoice", async ({ page }) => {
  await page.goto("/invoices/simple");

  await expect(page.getByText("Invoice reference")).toBeVisible();
});
