exports.command = function () {

    var imagesName = this.globals.imagesName;

    this.waitForElementVisible('body', 3000);

    for (var i = 0; i < imagesName.length; i++) {

        var resultsItem = `.resultsItem:nth-child(${i + 1})`;
        var carousel = `${resultsItem} .carousel-1`

        this
            .scrollIntoView(`${resultsItem}`)
            .assert.containsText(`${resultsItem} h3.image-data-name`, imagesName[i])
            .assert.cssProperty(`${carousel}`, 'max-height', '0px')
            .click(`${resultsItem} .toggle-hide`)
            .pause(1000)
            .assert.cssProperty(`${carousel}`, 'max-height', '800px')
            .assert.visible(`${carousel} .original`)
            .assert.visible(`${carousel} .transformed`)
            .assert.visible(`${carousel} .dynamic`)
            .click(`${resultsItem} .toggle-hide`)
            .pause(1000)
            .assert.cssProperty(`${carousel}`, 'max-height', '0px')
            .pause(1000)
    }

    return this;
};