import BasePage from './base_page'

class FormsPage extends BasePage {

  get formDisplay() { return $('android=new UiSelector().description("Forms-screen")') }
  get inputTextForm() { return $('android=new UiSelector().resourceId("RNE__Input__text-input")') }
  get resultTextForm() { return $('android=new UiSelector().description("input-text-result")') }
  get inputSwitchForm() { return $('android=new UiSelector().description("switch")') }
  get textDropDownForm() { return $('android=new UiSelector().resourceId("text_input")') }
  get chevronDropDownForm() { return $('android=new UiSelector().resourceId("dropdown-chevron")') }
  get activeBtnForm() { return $('android=new UiSelector().description("button-Active")') }
  get inactiveBtnForm() { return $('android=new UiSelector().className("android.view.ViewGroup").instance(20)') }

  get dropDownOption1Form() { return $('android=new UiSelector().text("webdriver.io is awesome")') }
  get dropDownOption2Form() { return $('android=new UiSelector().text("Appium is cool")') }
  get dropDownOption3Form() { return $('android=new UiSelector().text("This is a native app")') }

  async formsPageIsVisible() {
    try {
      await this.formDisplay.waitForDisplayed({ timeout: 10000 })
      return await this.formDisplay.isDisplayed()
    } catch {
      return false
    }
  }

  async fillInputField(text) {
    await this.inputTextForm.setValue(text)
  }

  async getInputValue() {
    return await this.inputTextForm.getText()
  }

  async getResultValue() {
    return await this.resultTextForm.getText()
  }

  async inputResultMatches() {
    const result = await this.getResultValue()
    const input = await this.getInputValue()
    return result === input
  }

  async toggleSwitch() {
    await this.inputSwitchForm.click()
  }
  async switchIsEnabled() {
    const value = await this.inputSwitchForm.getAttribute('checked')
    return value === 'true'
  }

  async openDropDown() {
    await this.chevronDropDownForm.click()
  }

  async selectDropDownOption(opcao) {
    await this.openDropDown()

    const opcoes = {
      1: this.dropDownOption1Form,
      2: this.dropDownOption2Form,
      3: this.dropDownOption3Form,
    }

    const item = opcoes[opcao]
    await item.click()
  }

  async getDropDownSelectedText() {
    return await this.textDropDownForm.getText()
  }

  async clickBtnActive() {
    await this.activeBtnForm.click()
  }

  async clickBtnInactive() {
    await this.inactiveBtnForm.click()
  }
}

export default new FormsPage()