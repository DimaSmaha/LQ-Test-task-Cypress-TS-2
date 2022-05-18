class LoginPage{
    //tc1
    //objects
    get usernameInput(){
        return cy.get('[id="username"]')
    }
    get passwordInput(){
        return cy.get('[id="password"]')
    }
    get loginButton(){
        return cy.get('[name="login"]')
    }
    //methods
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
        this.fillUsername(username);
        this.fillPassword(password);
        this.clickLoginButton()
    }
    //checks
    get LoggedAsCheck(){
        return cy.get('[id="loggedas"]')
    }

    //tc2
    //objects
    get lostPasswordBtn(){
        return cy.get('[href="/account/lost_password"]')
    }
    get lostPasswordEmailInput(){
        return cy.get('[id="mail"]')
    }
    get lostPasswordSubmitBtn(){
        return cy.get('[name="commit"]')
    }
    //methods to interract
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

   //checks
    get successfulRecoverPasswordNoticeCheck(){
    return cy.get('[id="flash_notice"]')
    }
}
    export default LoginPage