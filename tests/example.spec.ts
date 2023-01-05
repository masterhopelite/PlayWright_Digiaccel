// example.spec.ts
import { test, expect } from '@playwright/test';


test('Check Customer sign up with valid Data', async ({ page }) => {
  await page.goto('https://digiaccel.in/');
 
  await page.getByRole('button').first().click();
  await page.getByPlaceholder('Name').fill("yodgdfgdfgdfdfgdfgdf")
  await page.getByPlaceholder('Email').fill("username@gmail.com")
  await page.getByPlaceholder('Phone Number').fill("1234567890")
  await page.locator('xpath=//input[@id="inline-radio-2"]').click();
  await page.locator('xpath=//button[@id="submitbutton"]').click()
  

});
test('Check Customer sign up with invalid Data', async ({ page }) => {
  await page.goto('https://digiaccel.in/');
 
  await page.getByRole('button').first().click();
  await page.getByPlaceholder('Name').fill("yodgdfgdfgdfdfgdfgdf")
  await page.getByPlaceholder('Email').fill("username")
  await page.getByPlaceholder('Phone Number').fill("12345")
  await page.locator('xpath=//input[@id="inline-radio-2"]').click();
  await page.locator('xpath=//button[@id="submitbutton"]').click()
  
  
 

});
test('Check Customer sign up with  OTP', async ({ page }) => {
  await page.goto('https://digiaccel.in/');
 
  await page.getByRole('button').first().click();
  await page.getByPlaceholder('Name').fill("yodgdfgdfgdfdfgdfgdf")
  await page.getByPlaceholder('Email').fill("username@gmail.com")
  await page.getByPlaceholder('Phone Number').fill("1234567890")
  await page.locator('xpath=//input[@id="inline-radio-2"]').click();
  await page.locator('xpath=//button[@id="submitbutton"]').click()
  await page.locator('xpath=//textarea[@tabindex="1"]').fill("1")
  await page.locator('xpath=//textarea[@tabindex="2"]').fill("2")
  await page.locator('xpath=//textarea[@tabindex="3"]').fill("3")
  await page.locator('xpath=//textarea[@tabindex="4"]').fill("4")
  await page.locator('xpath=//textarea[@tabindex="5"]').fill("5")
  await page.locator('xpath=//textarea[@tabindex="6"]').fill("6")
  await page.getByText('Verify').click()

});