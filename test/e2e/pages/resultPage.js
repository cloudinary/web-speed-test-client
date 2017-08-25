module.exports = {
    elements: {
        results: '.results'
    },
    commands: [{
        load: function () {
            return this
                .waitForElementVisible('@results', this.props.resultsTimeout)
        },
        clickOnSeeMoreButton: function (index) {
            var resultsItem = `.resultsItem:nth-child(${index + 1})`;
            var carousel = `${resultsItem} .carousel-1`

            this.api.scrollIntoView(resultsItem)
                .assert.cssProperty(carousel, 'max-height', '0px')
                .click(resultsItem + ' button.toggle-btn')
                .waitForElementPresent(resultsItem + '.expanded', 3000)
                .assert.cssProperty(carousel, 'max-height', '800px')
        },
        clickOnCloseButton: function (index) {
            var resultsItem = `.resultsItem:nth-child(${index + 1})`;
            var carousel = `${resultsItem} .carousel-1`

            this.api.scrollIntoView(resultsItem)
                .click(resultsItem + ' button[data-state=toggle-hide]')
                .waitForElementNotPresent(resultsItem + '.expanded', 3000)
                .assert.cssProperty(carousel, 'max-height', '0px')
        },
        checkImageName: function (index, name) {
            var resultsItem = `.resultsItem:nth-child(${index + 1})`;
            this.assert.containsText(`${resultsItem} h3.image-data-name`, name)
        },
        verifyBlocks: function (index) {
            var resultsItem = `.resultsItem:nth-child(${index + 1})`;
            var carousel = `${resultsItem} .carousel-1`

            this.assert.visible(`${carousel} .original`)
                .assert.visible(`${carousel} .transformed`)
                .assert.visible(`${carousel} .dynamic`)
        }
    }],
    props: {
        resultsTimeout: 180000
    },

};