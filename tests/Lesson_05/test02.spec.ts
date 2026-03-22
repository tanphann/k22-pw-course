import { test } from '@playwright/test';

 test('Bài 2: Điền vào trang product page', async ({ page }) => {
    await test.step("Step 1: Mở website", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    });

    await test.step("Step 2: Thêm sản phẩm vào giỏ hàng", async () => {
        // Sản phẩm 1 - thêm 2 sản phẩm
        await page.locator("//button[@data-product-id='1']").click();
        await page.locator("//button[@data-product-id='1']").click();

        // Sản phẩm 2 - thêm 3 sản phẩm
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").click();   

        // Sản phẩm 3 - thêm 1 sản phẩm
        await page.locator("//button[@data-product-id='3']").click();
    });
});                                