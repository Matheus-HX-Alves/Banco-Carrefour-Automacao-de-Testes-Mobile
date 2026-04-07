import LoginPage from "../pageobjects/login_page";

describe("Spec - Login", () => {
  beforeEach(async () => {
    await driver.terminateApp('com.wdiodemoapp')
    await driver.activateApp('com.wdiodemoapp')
  })

  it('CT-01 — Login com credenciais válidas', async () => {
    await LoginPage.acessaLoginPage()

    await LoginPage.fillLoginFields('mail@mail.com', '12345678')
    await LoginPage.submitLogin()

    await LoginPage.loginAlertIsVisible()

    const loginAlertMessage = await LoginPage.getLoginAlertText()
    await expect(loginAlertMessage).toEqual('You are logged in!')

    await LoginPage.confirmLoginAlert()
  })

})