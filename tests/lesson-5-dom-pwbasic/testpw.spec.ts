import { test } from '@playwright/test'

test('Testcase name', async ({ page }) => {
    await test.step('Access to HomepFage', async () => {
        await page.goto('https://material.playwrightvn.com/');
    }); //step 1

    await test.step('Select "Sign In" button', async () => {

    }); //step 2
})
