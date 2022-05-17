class Common {

   //methods
   GoToPage(){
      cy.viewport(1500,660)
      cy.visit('https://www.redmine.org/')
   }
   
   //objects
   get defectWord(){
      return cy.contains('Defect #')
   }
   
   //common
   clickDefectWord(){
   return this.defectWord.click()
   }
   clickApiIssuesGuide(){
      return cy.get('[class="wiki-page"]').contains("Issues").click()
   }
   
   //common checks
   get defectDetailsCheck(){
      return cy.get('[class="description"]')
   }
   get profileDetailsPageCheck(){
      return cy.get('[class="splitcontentleft"]')
   }
   get apiDetails(){
      return cy.get('[class="toc right"]')
   }
   get whoUsesRedmine(){
      return cy.get('[src="/attachments/download/7657/logos.png"]')
   }
   

 }
            
export default Common