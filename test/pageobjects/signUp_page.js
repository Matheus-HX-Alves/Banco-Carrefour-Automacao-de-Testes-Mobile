import BasePage from "./base_page";
class SignUpPage extends BasePage {

  // Getters SingUp
  get btnSignUpTab() { return $('android=new UiSelector().text("Sign up")') }
  get inputEmail() { return $('android=new UiSelector().text("Email")') }
  get inputPass() { return $('android=new UiSelector().text("Password")') }
  get inputConfirmPass() { return $('android=new UiSelector().text("Confirm password")') }
  get btnSubmitForm() { return $('android=new UiSelector().description("button-SIGN UP")') }
  get textAlert() {return $('android=new UiSelector().resourceId("android:id/message")')}
  get btnConfirmAlert() {return $('android=new UiSelector().resourceId("android:id/button1")')}
  get messageMinimalPassLen(){return $('android=new UiSelector().text("Please enter at least 8 characters")')}
  get messageRequireEmail(){return $('android=new UiSelector().text("Please enter a valid email address")')}
  get messageSamePass (){return $('android=new UiSelector().text("Please enter the same password")')}
  
 async fillRegistrationFields(email, pass, confirmPass) {
    await this.inputEmail.setValue(email)

    await this.inputPass.setValue(pass)

    await this.inputConfirmPass.setValue(confirmPass)
  }

  async openSignUpTab() {
    await this.btnSignUpTab.click()
  }

  async submitSignUpUser() {
    await this.btnSubmitForm.click()
  }

  async signUpAlertIsVisible() {
    try {
      await this.textAlert.waitForDisplayed({ timeout: 10000 })
      return await this.textAlert.isDisplayed()
    } catch {
      return false
    }
  }

  async getSignUpAlertText() {
    return await this.textAlert.getText()
  }

  async confirmSignUpAlert() {
    await this.btnConfirmAlert.click()
  }

  async getPassLenMessage(){
    return await this.messageMinimalPassLen.getText()
   }
   async getSamePassMessage(){
    return await this.messageSamePass.getText()
   }
   async getRequireEmailMessage(){
    return await this.messageRequireEmail.getText()
   }
}

export default new SignUpPage() 