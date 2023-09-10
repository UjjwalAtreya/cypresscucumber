import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { searchPage } from "@pages/SearchPage";

Given("A broweser with property finder page", () => {
  cy.visit("/");
  cy.intercept('GET', 'https://www.propertyfinder.bh/_next/data/28cLQ2qzHoVye0kbkifJi/en/search.json?c=1&t=35&pt=300000&fu=0&ob=mr').as('results')
});

When("User selects property type {string} with maxPrice {string} and clicks search", (propertyType, maxprice) => {
  searchPage.propertyType()
  searchPage.selectPropertyType(propertyType)
  searchPage.selectMaxPriece(maxprice)
  searchPage.clickSearchBtn()
});
Then("User shouled be able to see the list of results and verify the count",  () => {
  searchPage.getApiResponseAndVerifyTotalCount()
})


