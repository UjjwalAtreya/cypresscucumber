import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { searchPage } from "@pages/SearchPage";
import { resultPage } from "@pages/ResultsPage";


Given("A browser with property finder page", () => {
  cy.visit("/");
  cy.intercept('GET', '**/_next/data/*/en/search.json?c=1&t=35&pt=300000&fu=0&ob=mr').as('viallaResult')
  cy.intercept('GET','**/_next/data/*/en/search.json?c=3&t=4&fu=0&ob=mr').as('commercialOfficeResults')
 
});

When('User checks commerial proerties only and selects office categories',()=>{
    searchPage.selectCommercialPropertiesOnly()
    searchPage.clickSearchBtn()
    searchPage.categorySelection('Offices')
})


Then('User shouled be able to see the list of villa count and verify the count',()=>{
  resultPage.getApiResponseAndVerifyTotalVillaCount()
})

When("User selects property type {string} with maxPrice {string} and clicks search", (propertyType, maxprice) => {
  searchPage.propertyType()
  searchPage.selectPropertyType(propertyType)
  searchPage.selectMaxPriece(maxprice)
  searchPage.clickSearchBtn()
});

When('User search for {string} location under search box and selects the first location if present',(location)=>{
  searchPage.enterRegionLocation(location);
  searchPage.selectFirstLocation()
  searchPage.clickSearchBtn()
 

})

Then('User will navigate to first property and verify the available date is not empty',()=>{
  resultPage.selectFirstPropertyAndVerifyData()
})




