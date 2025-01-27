class CONTAIN{
    containOrm(){
        cy.scrollTo("bottom");
        cy.xpath('(//span[@title="Unassigned"])[2]').should('be.visible');
    }
}
export default CONTAIN;