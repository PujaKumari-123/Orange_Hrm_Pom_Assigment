class LOGIN{
  
   EnterUrl(){
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
  loginrOrm(){
    cy.get('[placeholder="Username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('[type="submit"]').click();
  }
   
}
export default LOGIN;
