class RegisterPage{
//objects
get loginInput(){
    return cy.get('[id="user_login"]')
}
get passwordInput(){
    return cy.get('[id="user_password"]')
}
get passwordConfirmInput(){
    return cy.get('[id="user_password_confirmation"]')
}
get firstnameInput(){
    return cy.get('[id="user_firstname"]')
}
get lastnameInput(){
    return cy.get('[id="user_lastname"]')
}
get emailInput(){
    return cy.get('[id="user_mail"]')
}
get submitButton(){
    return cy.get('[name="commit"]')
}
//methods
fillLogin(login: string){
    this.loginInput.type(login)
}
fillPassword(password: string){
    this.passwordInput.type(password)
}
fillPasswordConfirmation(password2: string){
    this.passwordConfirmInput.type(password2)
}
fillFirstName(firstname: string){
    this.firstnameInput.type(firstname)
}
fillLastName(lastname: string){
    this.lastnameInput.type(lastname)
}
fillEmail(email: string){
    this.emailInput.type(email)
}
clickSubmitButton(){
    this.submitButton.click()
}

registerAccount(login:string, password:string, password2:string, firstname:string, lastname:string, email:string){
    this.fillLogin(login)
    this.fillPassword(password)
    this.fillPasswordConfirmation(password2)
    this.fillFirstName(firstname)
    this.fillLastName(lastname)
    this.fillEmail(email)
    this.clickSubmitButton()
}


//checks
get successfulRegistration(){
    return cy.get('[id="flash_notice"]')
}
get error(){
    return cy.get('[id="errorExplanation"]')
}

}

export default new RegisterPage();