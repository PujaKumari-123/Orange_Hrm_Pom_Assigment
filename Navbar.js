class NAVBAR{
    NavbarOrm(){
    
    cy.xpath('//h6[text()="Dashboard"]').should('be.visible');
    cy.get('[class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click();
    cy.xpath('//a[text()="Support"]').should('be.visible');
    cy.xpath('//a[text()="About"]').should('be.visible');
    
  
}
 }
 export default NAVBAR;