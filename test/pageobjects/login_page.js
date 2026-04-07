import BasePage from "./base_page";
class LoginPage extends BasePage {

  // Getters LoginPage
  get loginDisplay() {return $('android=new UiSelector().description("Login-screen")')}
  get btnConfirmLoginAlert() { return $('android=new UiSelector().resourceId("android:id/button1")') }
  get btnLoginSubmit() { return $('android=new UiSelector().description("button-LOGIN")') }
  get textLoginAlert() {return $('android=new UiSelector().resourceId("android:id/message")')}
  get inputLoginMail() {return $('android=new UiSelector().text("Email")')}
  get inputLoginPass() {return $('android=new UiSelector().text("Password")')}
 
  async fillLoginFields(email, pass) {
    await this.inputLoginMail.setValue(email)

    await this.inputLoginPass.setValue(pass)
  }
  async loginDisplayIsVisible() {
    try {
      await this.loginDisplay.waitForDisplayed({ timeout: 10000 })
      return await this.loginDisplay.isDisplayed()
    } catch {
      return false
    }
  }
  async submitLogin() {
    await this.btnLoginSubmit.click()
  }

  async loginAlertIsVisible() {
    try {
      return await this.textLoginAlert.isDisplayed()
    } catch {
      return false
    }
  }

  async getLoginAlertText() {
    return await this.textLoginAlert.getText()
  }

  async confirmLoginAlert() {
    await this.btnConfirmLoginAlert.click()
  }
}

export default new LoginPage() 