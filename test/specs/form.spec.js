import FormsPage from "../pageobjects/form_page";

describe("Spec - Forms", () => {
  beforeEach(async () => {
    await driver.terminateApp('com.wdiodemoapp')
    await driver.activateApp('com.wdiodemoapp')
  })

  it('CT-01 — deve selecionar opção no dropdown', async () => {


    await FormsPage.acessaFormsPage()
    await FormsPage.selectDropDownOption(1)

    const selecionado = await FormsPage.getDropDownSelectedText()
    await expect(selecionado).toEqual('webdriver.io is awesome')
  })

  it('CT-02 — input deve refletir no resultado', async () => {

    await FormsPage.acessaFormsPage()
    await FormsPage.fillInputField('teste')

    const match = await FormsPage.inputResultMatches()
    await expect(match).toBe(true)
  })

})