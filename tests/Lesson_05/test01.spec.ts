import { test } from '@playwright/test';

 test('Bài 1: Điền vào trang register page', async ({ page }) => {
    await test.step("Step 1: Mở website", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();
    });

    await test.step("Step 2: Điền thông tin username", async () => {
        // await page.locator("//input[@id='username']").fill("Ngoc Vo");

        await page.locator("//input[@id='username']").pressSequentially("ngoctan k22", { delay: 20 });
        await page.locator("//input[@id='email']").fill("ngoctank22@gmail.com");
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//select[@id='interests']").selectOption('art'); 
        await page.locator("//select[@id='country']").selectOption('australia');
        await page.locator("//input[@id='dob']").fill("2001-07-12");
        await page.locator("//input[@id='profile']").setInputFiles("C:\\K22-Playwright\\pw-course\\tests\\Lesson_05\\living_room.jpg");
        await page.locator("//textarea[@id='bio']").pressSequentially("Thử test biology xem work không !!!", { delay: 20 });
    });
});                                