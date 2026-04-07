 export default class BasePage {
   //GETTERS
   get btnHome() { return $('android=new UiSelector().description("Home")'); } 
   get btnWebview() { return $('android=new UiSelector().description("Webview")'); } 
   get btnLogin() { return $('android=new UiSelector().description("Login")'); } 
   get btnForms() { return $('android=new UiSelector().description("Forms")'); } 
   get btnSwipe() { return $('android=new UiSelector().description("Swipe")'); } 
   get btnDrag() { return $('android=new UiSelector().description("Drag")'); } 
   get btnMenu() { return $('android=new UiSelector().description("Menu")'); }
 
 //ACTIONS 
   async acessaHomePage() {
     await this.btnHome.click()
   }
   async acessaWebViewPage() {
     await this.btnWebview.click()
   }
   async acessaFormsPage() {
     await this.btnForms.click()
   }
   async acessaLoginPage() {
     await this.btnLogin.click()
   }
   async acessaSwipePage() {
     await this.btnSwipe.click()
   }
   async acessaDragPage() {
     await this.btnDrag.click()
   }
   async acessaMenuPage() { 
     await this.btnMenu.click()
   }
}