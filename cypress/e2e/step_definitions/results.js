import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { resultPage } from "@pages/ResultsPage";

Then('User should be able to see the property count and verify the propety data',()=>{
    resultPage.getApiResponseAndVerifyTotalCountAndDataForCommercialProperty()
})