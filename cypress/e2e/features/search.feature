Feature: Search Feature

    Search feature will search for property type as villa with max price 300000

    Background:
        Given A broweser with property finder page

    Scenario: Search for property type villa with max price
        When User selects property type "Villa" with maxPrice "300,000" and clicks search
        Then User shouled be able to see the list of results and verify the count