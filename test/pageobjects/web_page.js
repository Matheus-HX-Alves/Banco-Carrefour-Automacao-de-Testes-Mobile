import BasePage from './base_page'
 class WebPage extends BasePage {

  get webViewDisplay () {return $('android=new UiSelector().className("android.webkit.WebView")')}
   
  async webPageIsVisible() {
    try {
      await this.webViewDisplay.waitForDisplayed({ timeout: 10000 })
      return await this.webViewDisplay.isDisplayed()
    } catch {
      return false
    }
  }
}

export default new WebPage() 