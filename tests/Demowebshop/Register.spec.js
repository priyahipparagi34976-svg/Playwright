import {expect, test} from "@playwright/test"
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

// test("Demowebshop login valid cred", async({page})=>{
//     await page.goto("https://demowebshop.tricentis.com/register")
//     await page.click('[class="ico-login"]')
//     await page.locator('[name="Email"]').fill("aurora123@gmail.com")
//     await page.locator('[type="password"]').fill("Test@123")
//     await page.locator('[type="checkbox"]').check()
//     await page.click('[value="Log in"]')
//     await expect(page.getByText('aurora123@gmail.com')).toBeVisible()

// })

// test("Demowebshop search laptop", async({page})=>{
//     await page.goto("https://demowebshop.tricentis.com/register")
//     await page.locator('[id="small-searchterms"]').fill("Laptop")
//     await page.click('[class="button-1 search-box-button"]')
//     await page.click('//a[text()="14.1-inch Laptop"]')
//     await expect(page.getByText('Unique Asian-influenced imprint wraps the laptop both inside and out')).toBeVisible()

// })

test("Demowebshop add book to cart", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/register")
    await page.click('[class="ico-login"]')
    await page.locator('[name="Email"]').fill("aurora123@gmail.com")
    await page.locator('[type="password"]').fill("Test@123")
    await page.locator('[type="checkbox"]').check()
    await page.click('[value="Log in"]')
    await page.getByText('Books').last().click()
    await page.getByText('Computing and Internet').first().click()
    await page.click('[id="add-to-cart-button-13"]')

})


test("Demowebshop", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/register")
    await page.click('[class="ico-login"]')
    await page.locator('[name="Email"]').fill("aurora123@gmail.com")
    await page.locator('[type="password"]').fill("Test@123")
    await page.locator('[type="checkbox"]').check()
    await page.click('[value="Log in"]')


})