import SignUpPage from "../pageobjects/signUp_page";

describe("Spec - Cadastro", () => {
  beforeEach(async () => {
    await driver.terminateApp('com.wdiodemoapp')
    await driver.activateApp('com.wdiodemoapp')
  })

  it('CT-01 — Login com senha menor que 8 caracteres', async () => {

    await SignUpPage.acessaLoginPage()
    await SignUpPage.openSignUpTab()
    await SignUpPage.fillRegistrationFields('mail@mail.com', '1234567', '1234567')
    await SignUpPage.submitSignUpUser()

    const text = await SignUpPage.getPassLenMessage()
    await expect(text).toEqual('Please enter at least 8 characters')
  })
  it('CT-02 — Login com campos em branco', async () => {
    await SignUpPage.acessaLoginPage()
    await SignUpPage.openSignUpTab()

    await SignUpPage.submitSignUpUser()

    const requireEmailMessage = await SignUpPage.getRequireEmailMessage()
    await expect(requireEmailMessage).toEqual('Please enter a valid email address')
    const lenPassMenssage = await SignUpPage.getPassLenMessage()
    await expect(lenPassMenssage).toEqual('Please enter at least 8 characters')
    const samePassMessage = await SignUpPage.getSamePassMessage()
    await expect(samePassMessage).toEqual('Please enter the same password')
  })

  it('CT-03 — Cadastro de novo usuário', async () => {
    await SignUpPage.acessaLoginPage()
    await SignUpPage.openSignUpTab()
    await SignUpPage.fillRegistrationFields('mail@mail.com', '12345678', '12345678')
    await SignUpPage.submitSignUpUser()

    await driver.waitUntil(
      async () => await SignUpPage.signUpAlertIsVisible(),
      { timeout: 8000, timeoutMsg: 'Alert de sucesso não apareceu' }
    )

    const text = await SignUpPage.getSignUpAlertText()
    await expect(text).toEqual('You successfully signed up!')

    await SignUpPage.confirmSignUpAlert()
  })
})