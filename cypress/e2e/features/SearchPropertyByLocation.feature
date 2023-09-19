Feature:  Search for Property by location

    This test will search property by location and check for available data 

    Background:
        Given A browser with property finder page
    Scenario: Search by location and select first property and verify id available data is present
        When User search for "The" location under search box and selects the first location if present
        Then User will navigate to first property and verify the available date is not empty