import { test } from '@playwright/test';

 test('Bài 3: Todo page', async ({ page }) => {
    await test.step("Step 1: Mở website", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
    });

    await test.step("Step 2: Thêm 100 item vào todo list", async () => {
        // Thêm 100 item vào todo list
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo item ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    await test.step("Step 3: Xóa các item là số lẻ", async () => {
        //Xử lý dialog confirm --> trước khi delete 
        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        // Xóa các item là số lẻ
        for (let i = 0; i <= 100; i++) {
            await page.locator(`//button[@onclick='deleteTask(${i})']`).click();
        }
    });
});                                