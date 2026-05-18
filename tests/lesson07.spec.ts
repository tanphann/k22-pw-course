import { expect, test } from '@playwright/test';

test('Test 1: Điền vào trang register page', async ({ page }) => {
    await test.step("Step 1: Mở website", async () => {
        await page.goto("https://material.playwrightvn.com/");

        const tittleLoc = page.locator("//h1");
        await expect(tittleLoc).toBeVisible();
    });

    await test.step("Step 2: Click vào 'Bài học 1' ", async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();

        const tittleLoc = page.locator("//h1[@id='self']");
        await expect(tittleLoc).toBeVisible();
    });

    await test.step("Step 3: Điền thông tin username", async () => {
        const testData = {
            username: "ngoctanphan01",
            email: "ngoctanphan01@gmail.com"
        }
        
        await page.locator().fill(testData.username);
        await page.locator().fill(testData.email);
        await page.locator().click(); //Submit form
        
        const tableRows = await page.locator("").count();
        expect(tableRows).toBe(1);

        const usernameCell = page.locator("");
        const emailCell = page.locator("");

        await expect(usernameCell).toHaveText(testData.username);
        await expect(emailCell).toHaveText(testData.email);
}); 