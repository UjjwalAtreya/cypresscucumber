Feature: Search Feature

    Search feature will search for property type as villa with max price 300000

    Background:
        Given A broweser with property fineder page

    Scenario: Search for property type villa with max price
        When User selects property type "Villa" with maxPrice "300,000" and clicks search
        Then User clicks on serach button