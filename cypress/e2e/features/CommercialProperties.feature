Feature: Search commerical properties offices and verify the details.

    This will search all commercial properies with office category and verifies the details with the api response

    Background:
        Given A browser with property finder page 

    Scenario: Click on commercial propeties only checkbox and select offices
        When User checks commerial proerties only and selects office categories
        Then User should be able to see the property count and verify the propety data
       