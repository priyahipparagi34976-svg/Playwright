import {test} from "@playwright/test"

test("PIM module", async({page})=>{
    //launch URL
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //login to site
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[type="password"]').fill("admin123")
    //await page.click('[type="submit"]')
    await page.click('//button[text()=" Login "]')

    //check dashboard is visible or not
    await page.locator('//h6[text()="Dashboard"]').waitFor({state:"visible"})

    //click on PIM
    await page.click('//span[text()="PIM"]')
    //click on add employee
    await page.click('//a[text()="Add Employee"]')

    //add first name , Middle name, last name
    await page.locator('[placeholder="First Name"]').fill("Priya")
    await page.locator('[name="middleName"]').fill("Basavaraj")
    await page.locator('[class="oxd-input oxd-input--active orangehrm-lastname"]').fill("Hipparagi")

    //upload profile picture
    await page.locator('[type="file"]').setInputFiles('C:/Users/PRIYA HIPPARAGI/Pictures/Wallpaper.jpg')

    //click on save
    await page.click('[type="submit"]')

    //checking if employee is added --Assertions
    await page.locator('[class="oxd-text oxd-text--h6 --strong"]').waitFor({state:"visible"})
    await expect(await page.locator('[class="oxd-text oxd-text--h6 --strong"]').textContent()).toBe()

})