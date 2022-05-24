import HomePage from "./home.page"

class LoginPage extends HomePage{
    //objects tc1
    get usernameInput(){
        return cy.get('[id="username"]')
    }
    get passwordInput(){
        return cy.get('[id="password"]')
    }
    get loginButton(){
        return cy.get('[name="login"]')
    }
    //objects tc2
    get lostPasswordBtn(){
        return cy.get('[href="/account/lost_password"]')
    }
    get lostPasswordEmailInput(){
        return cy.get('[id="mail"]')
    }
    get lostPasswordSubmitBtn(){
        return cy.get('[name="commit"]')
    }
    //checks tc1
    get LoggedAsCheck(){
    return cy.get('[id="loggedas"]')
    }
   //checks tc2
    get successfulRecoverPasswordNoticeCheck(){
    return cy.get('[id="flash_notice"]')
    }

    //methods tc1
    fillUsername(username: string){
        this.usernameInput.type(username)
    }
    fillPassword(password: string){
        this.passwordInput.type(password)
    }
    clickLoginButton(){
        this.loginButton.click()
    }
    logIntoAccount(username:string, password:string){
        super.clickSignInButton()
        this.fillUsername(username);
        this.fillPassword(password);
        this.clickLoginButton()
    }
    //methods tc2
    clickLostPasswordBtn(){
        this.lostPasswordBtn.click()
    }
    fillLostPasswordEmail(email: string){
        this.lostPasswordEmailInput.type(email)
    }
    clickLostPasswordSubmitBtn(){
        this.lostPasswordSubmitBtn.click()
    }
    lostPasswordRecover(email:string){
        this.clickLostPasswordBtn();
        this.fillLostPasswordEmail(email);
        this.clickLostPasswordSubmitBtn()
    } 

}
    export default LoginPage;