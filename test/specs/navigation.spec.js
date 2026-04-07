import allureReporter from '@wdio/allure-reporter'
import DragPage from "../pageobjects/drag_page";
import FormsPage from "../pageobjects/form_page";
import HomePage from "../pageobjects/home_page";
import LoginPage from "../pageobjects/login_page";
import SwipePage from "../pageobjects/swipe_page";
import WebPage from "../pageobjects/web_page";

describe("Spec - Navegação entre telas", () => {
  beforeEach(async () => {
    allureReporter.addFeature('Navegação')
    await driver.terminateApp('com.wdiodemoapp')
    await driver.activateApp('com.wdiodemoapp')
  })

  it('CT-01 — Deve navegar para a Web Page', async () => { 
    await HomePage.acessaWebViewPage()
    const isVisible = await WebPage.webPageIsVisible()
    await expect(isVisible).toBe(true)
  })

  it('CT-02 — Deve navegar para a Login Page', async () => {
    await HomePage.acessaLoginPage()
    const isVisible = await LoginPage.loginDisplayIsVisible()
    await expect(isVisible).toBe(true)
  })

  it('CT-03 — Deve navegar para a Forms Page', async () => {
    await HomePage.acessaFormsPage() 
    const isVisible = await FormsPage.formsPageIsVisible()
    await expect(isVisible).toBe(true)
  })

  it('CT-04 — Deve navegar para a Swipe Page', async () => {
    await HomePage.acessaSwipePage()
    const isVisible = await SwipePage.SwipePageIsVisible()
    await expect(isVisible).toBe(true)
  })

  it('CT-05 — Deve navegar para a Drag Page', async () => {
    await HomePage.acessaDragPage()
    const isVisible = await DragPage.DragPageIsVisible()
    await expect(isVisible).toBe(true)
  })
})