//*******************************HARDCODED DATA*****************************

// import {expect, test} from "@playwright/test"
// test("Demowebshop Register module", async({page})=>{
//     await page.goto("https://demowebshop.tricentis.com/register")
//     await page.click('//a[text()="Register"]')
//     await page.locator('[id="gender-female"]').check()
//     await page.locator('[name="FirstName"]').fill("Priya")
//     await page.locator('[name="LastName"]').fill("H")
//     await page.locator('[id="Email"]').fill("NTT@gmail.com")
//     await page.locator('[name="Password"]').fill('NTT123')
//     await page.locator('[name="ConfirmPassword"]').fill('NTT123')
//     await page.click('[value="Register"]')
//     await expect(await page.locator('[class="result"]').toHaveText("Your registration completed"))

// })

//********************USING JSON DATA**************************** */

import {expect, test} from "@playwright/test"
import data from "../../TestData/commondata.json"
test("Demowebshop Register module", async({page})=>{
    await page.goto("url")
    await page.click('//a[text()="Register"]')
    await page.locator('[id="gender-female"]').check()
    await page.locator('[name="FirstName"]').fill("Priya")
    await page.locator('[name="LastName"]').fill("H")
    await page.locator('[id="Email"]').fill("email")
    await page.locator('[name="Password"]').fill('password')
    await page.locator('[name="ConfirmPassword"]').fill('password')
    await page.click('[value="Register"]')
    await expect(await page.locator('[class="result"]').toHaveText("Your registration completed"))

})