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
        },
        checkTabItem: function (index) {

            var self = this;

            var resultsItem = '.resultsItem:nth-child(' + index + ')';
            var header = resultsItem + ' h3';

            this
                .api.scrollIntoView(resultsItem)
                .click(resultsItem + ' button.toggle-btn')
                .waitForElementPresent(resultsItem + '.expanded', 3000)
                .getText(header, function (result) {

                    var carousel = resultsItem + ' .carousel-1';

                    var first = carousel + ' .dynamic ul li:nth-child(1)';
                    var second = carousel + ' .dynamic ul li:nth-child(2)';
                    var third = carousel + ' .dynamic ul li:nth-child(3)';

                    function checkTab(selector, tabName, browser) {
                        var format;

                        if (tabName === 'WEBP') {
                            format = 'f_webp'
                        } else if (tabName === 'PNG') {
                            format = 'f_png'
                        } else {
                            format = 'f_auto'
                        }

                        return browser
                            .getText(selector, function (result) {
                                browser.assert.equal(result.value, tabName);
                            })
                            .getAttribute(selector, 'class', function (result) {
                                browser.assert.equal(true, result.value.includes('--selected'));
                            })
                            .getAttribute(carousel + ' .dynamic .transform-image img', 'src', function (result) {
                                browser.assert.equal(true, result.value.includes(format));
                            })
                    }


                    switch (result.value) {
                        case 'MickeyArt.webp':

                            checkTab(first, 'JPEG-XR', this)
                            this.click(second)
                            checkTab(second, 'PNG', this)
                            break;

                        case 'Mickey_Mouse.png':

                            checkTab(carousel + ' .dynamic ul li', 'WEBP', this);
                            break;

                        case 'a58ecacebad44ed0c8e32aa9a64727e1.jpg':

                            checkTab(first, 'JPEG-XR', this)
                            this.click(second)
                            checkTab(second, 'PNG', this)
                            break;

                        case '212482.jpg':

                            checkTab(first, 'WEBP', this)
                            this.click(second)
                            checkTab(second, 'PNG', this)
                            break;

                        case '386870.jpg':

                            checkTab(first, 'WEBP', this)
                            this.click(second)
                            checkTab(second, 'PNG', this)
                            break;

                        case '590847e65b32c851033a9ca1ca26d903.jpg':

                            checkTab(first, 'WEBP', this)
                            this.click(second)
                            checkTab(second, 'JPEG-XR', this)
                            this.click(third)
                            checkTab(third, 'PNG', this)
                            break;

                        case 'Mickey-Face-Clipart-mickey-and-friends-37612599-256-256.png':

                            checkTab(carousel + ' .dynamic ul li', 'WEBP', this);
                            break;

                        case '310qpmPNfIL._CR0,0,175,175_UX128.jpg':

                            checkTab(first, 'JPEG-XR', this)
                            this.click(second)
                            checkTab(second, 'PNG', this)
                            break;

                        case 'b386037ee62d835421af74a582667c3f37fa2741_128.jpg':

                            checkTab(first, 'JPEG-XR', this)
                            this.click(second)
                            checkTab(second, 'PNG', this)
                            break;

                        case 's-l96.jpg':

                            checkTab(first, 'WEBP', this)
                            this.click(second)
                            checkTab(second, 'PNG', this)
                            break;
                    }

                })
                .click(resultsItem + ' button[data-state=toggle-hide]')
                .waitForElementNotPresent(resultsItem + '.expanded', 3000)
                .pause(500, function () {

                    index++;

                    if (index > this.globals.imagesName.length) {
                        return;
                    }

                    self.checkTabItem(index);
                })


        }
    }],
    props: {
        resultsTimeout: 180000
    },

};