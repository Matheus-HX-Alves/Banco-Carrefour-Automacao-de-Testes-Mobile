import BasePage from './base_page'
 class SwipePage extends BasePage {

  get swipeDisplay () {return $('android=new UiSelector().text("Swipe horizontal")')}
   
  async SwipePageIsVisible() {
    try {
      
      await this.swipeDisplay.waitForDisplayed({ timeout: 10000 })
      return await this.swipeDisplay.isDisplayed()
    } catch {
      return false
    }
  }
}

export default new SwipePage() 