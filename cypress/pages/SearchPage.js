class SearchPage {

  elements = {
    propertyType: () => cy.get("div[class='dd__head dd--normal dd--secondary dd--filled']"),
    selectPropertyTypeFromList: (type) => cy.contains(type),
    maxPriceInput: () => cy.get("input[class='text-field__input    range-selector__input']").eq(1),
    priceToSelect: (price) => cy.contains(price),
    priceDropDown: () => cy.get("div[class='dd__head dd--normal dd--primary']").eq(3),
    searchbtn: () => cy.get("svg[viewbox='0 0 15 15'] ").eq(1),
    findBtn: () => cy.get('[data-testid="filters-form-btn-find"]'),
    commercialPropertiesCheckBox: () => cy.get('[class="checkbox-component__box"]'),
    selectCategory: (category) => cy.contains(category)
    

  };
  propertyType() {
    this.elements.propertyType().eq(1).click({ force: true })
  }
  selectPropertyType(ptype) {
    this.elements.selectPropertyTypeFromList(ptype).click()
  }
  selectMaxPriece(price) {
    this.elements.priceDropDown().click()
    this.elements.maxPriceInput().click()
    this.elements.priceToSelect(price).click()
  }
  clickSearchBtn() {
    this.elements.searchbtn().click({ force: true })
    this.elements.findBtn().click({ force: true })
  }
  selectCommercialPropertiesOnly(){
    this.elements.commercialPropertiesCheckBox().click({force : true})
  }
  categorySelection(categoryToSelect){
    this.elements.selectCategory(categoryToSelect).click({force : true})
  }

  
}

export const searchPage = new SearchPage();
