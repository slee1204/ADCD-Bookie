import { test, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlOnboarding = "http://localhost:3000/onboarding";

test.beforeAll(async () => {
  console.log("Before tests");
});

test.afterAll(async () => {
  console.log("After tests");
});

test.describe("Header area", () => {
  test("The link tag", async ({ page }) => {
    await page.goto(urlHome);

    const linkTag = page.locator('link[rel="icon"]');
    await expect(linkTag).toHaveAttribute("href", "/favicon.png");
  });
});

test.describe("The Image Area", () => {
  test("Count the number of images used", async ({ page }) => {
    await page.goto(urlHome);

    await expect(page.locator("img")).toHaveCount(3);
  });
});

test.describe("Button test", () => {
  test("This is the info component", async ({ page }) => {
    await page.goto(urlHome);
    await expect(page.locator("button")).toContainText("Get started");
  });
  test("Should contain a link to onboarding page", async ({ page }) => {
    await page.goto(urlHome);
    await page.click("text=Get Started");
    await expect(page).toHaveURL(urlOnboarding);
  });
});

test.describe("Navigation bar test", () => {
  test("Should contain a link back to home page", async ({ page }) => {
    await page.goto(urlHome);
    await page.click("#navbar");
    await expect(page).toHaveURL(urlHome);
  });
});
