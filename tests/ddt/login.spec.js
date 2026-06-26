import {test} from "@playwright/test"
import data from '../../TestData/commondata.json'
import {loginpage} from '../../pages/index.js'
import { random } from "../utils/random_number.js"


test.only('POM', async({page})=>{
    let obj=new loginpage(page)
    await page.goto(data.url)
    let ran = random()
    await obj.Username.fill(data.Username)
    console.log(await obj.Username.inputvalue());
    
    await obj.Password.fill(data.Password)
    await obj.button.click()
})

test('method',async({page})=>{
    let obj1=new loginpage(page)
    await obj1.launch(data.url)
    await obj1.enter_details(data.Username,data.Password)
})