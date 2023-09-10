import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { searchPage } from "@pages/SearchPage";

Given("A broweser with property fineder page", () => {
  cy.visit("/");
});

When("User selects property type {string} with maxPrice {string} and clicks search", (propertyType,maxprice) => {
  searchPage.propertyType()
  searchPage.selectPropertyType(propertyType)
  searchPage.selectMaxPriece(maxprice)
});
Then("User clicks on serach button", () => {
  searchPage.clickSearchBtn()
})


