import { random } from "../tests/utils/random_number";

export class loginpage{
    constructor(page){
        this.page=page;
        this.Username=page.locator('[name="username"]')
        this.Password=page.locator('[type="password"]')
        this.button=page.locator('[type="submit"]')
    }

    //used to launch the application

    async launch(url){
        await this.page.goto(url)
    }
    async enter_details(Username,Password){
        let red=random()
        await this.Username.fill(Username)
        await this.Password.fill(Password)
        await this.button.click()
    }
}