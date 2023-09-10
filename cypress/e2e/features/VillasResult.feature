Feature: Search Vialla and verify search count result

    This will search for property type as villa with max price 300000 and verify the toatl search count

    Background:
        Given A browser with property finder page

    Scenario: Search for property type villa with max price
        When User selects property type "Villa" with maxPrice "300,000" and clicks search
        Then User shouled be able to see the list of villa count and verify the count