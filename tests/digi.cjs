const playwright = require("playwright");

(async () => {
  // Launch the browser
  const browser = await playwright.chromium.launch();

  // Create a new page
  const page = await browser.newPage();

  // Navigate to a website
  await page.goto("https://example.com");

  // Find the button element using the `getBy` method
  const button = await page.getByText("Click me");

  // Click on the button
  await button.click();

  // Close the browser
  await browser.close();
})();
