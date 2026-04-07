import BasePage from './base_page'
 class DragPage extends BasePage {

  get dragDisplay () {return $('android=new UiSelector().description("Drag-drop-screen")')}
   
  async DragPageIsVisible() {
    try {
      await this.dragDisplay.waitForDisplayed({ timeout: 10000 })
      return await this.dragDisplay.isDisplayed()
    } catch {
      return false
    }
  }
}

export default new DragPage() 