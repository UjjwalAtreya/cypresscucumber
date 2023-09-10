class ResultsPage {
    resultPageElement = {
        searchResultCount: () => cy.get("span[aria-label='Search results count']"),
        propertyBathroom: () => cy.get('[class="property-facts__value"]').eq(2),
        fisrtProperty: () => cy.get('.property-card_property-card__link__jGpOK').first(),
        propertyPriceCard: () => cy.get('[class="property-price__price"]').first(),
        propertyTile: () => cy.get('[class="text text--size6 text--bold property-page__title"]'),
        propertyDescription: () => cy.get('[data-qs="text-trimmer"]'),
        propertyLocation: () => cy.get('[class="property-location__detail-area"]'),
        propertySize: () => cy.get('[class="property-facts__value"]').eq(1),
        availableData:()=>cy.get('[class="property-facts__value"]').last()

    }

    getApiResponseAndVerifyTotalCountAndDataForCommercialProperty(results) {

        cy.wait('@commercialOfficeResults').then((interception) => {
            const resultCount = JSON.stringify(interception.response.body.pageProps.searchResult.meta.total_count)
            this.resultPageElement.searchResultCount().should('be.visible')
            this.resultPageElement.searchResultCount().invoke('text').then((text) => {
                expect(text).to.contain(parseInt(resultCount).toLocaleString())
            })
            this.resultPageElement.fisrtProperty().click({ force: true })
            this.resultPageElement.propertyPriceCard().invoke('text').then((propertyPrice) => {
                expect(propertyPrice).to.contain(parseInt(interception.response.body.pageProps.searchResult.properties[0].price.value).toLocaleString())
            })
            this.resultPageElement.propertyDescription().invoke('text').then((propertyDescription) => {
                this.resultPageElement.propertyDescription().should('contain', propertyDescription)
            })
            this.resultPageElement.propertyLocation().invoke('text').then((propertyLocation) => {
                this.resultPageElement.propertyLocation().should('contain', propertyLocation)
            })
            this.resultPageElement.propertySize().invoke('text').then((propertySize) => {
                expect(propertySize.includes(interception.response.body.pageProps.searchResult.properties[0].size.value)).to.be.true
            })
            this.resultPageElement.propertyBathroom().invoke('text').then((bathroomSize) => {
                expect(bathroomSize).to.eq(interception.response.body.pageProps.searchResult.properties[0].bathrooms)
            })
            this.resultPageElement.propertyTile().invoke('text').then((propertyTiltle) => {
                expect(propertyTiltle).to.eq(interception.response.body.pageProps.searchResult.properties[0].title)
            })
        })
    }

    getApiResponseAndVerifyTotalVillaCount() {
        cy.wait('@viallaResult').then((interception) => {
            const resultCount = JSON.stringify(interception.response.body.pageProps.searchResult.meta.total_count)
            this.resultPageElement.searchResultCount().should('be.visible')
            this.resultPageElement.searchResultCount().invoke('text').then((text) => {
                expect(text).to.contain(parseInt(resultCount).toLocaleString())
            })
        })
    }
    selectFirstPropertyAndVerifyData(){
        this.resultPageElement.fisrtProperty().click({ force: true })
        this.resultPageElement.availableData().should('not.be.empty')
    }
}


export const resultPage = new ResultsPage();