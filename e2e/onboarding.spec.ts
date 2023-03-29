import { test, expect } from "@playwright/test";

let urlOnboarding = "http://localhost:3000/onboarding";
let urlResultAction ="http://localhost:3000/results?genre=action"

test.beforeAll(async () => {
  console.log("Before tests");
});

test.afterAll(async () => {
  console.log("After tests");
});

test.describe("Head tag area", () => {
  test("Should contain a heading Choose Your Favourite Genre", async ({ page }) => {
    await page.goto(urlOnboarding);
    await expect(page.locator("h1")).toContainText('Choose Your Favourite Genre');
  })
})

test.describe("Navigation bar test", () => {
  test("Should contain a navigation bar on the page", async ({ page }) => {
    await page.goto(urlOnboarding);
    await expect(page.locator("#navbar")).toHaveCount(1);
  })
})

test.describe("Button test", () => {
  test("Should contain a link to result page and show the books that fall into Action genre", async ({ page }) => {
    await page.goto(urlOnboarding);
    await page.click("text=Action");
    await expect(page).toHaveURL(urlResultAction);
  })
})
