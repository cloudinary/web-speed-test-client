var https = require("https");
var url = require('url');

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


        },
        checkOpenWindowAndSave: function (index) {

            var self = this;

            var resultsItem = '.resultsItem:nth-child(' + index + ')';
            var carousel = resultsItem + ' .carousel-1';
            var header = resultsItem + ' h3';

            this
                .scrollIntoView(resultsItem)
                .click(resultsItem + ' button.toggle-btn')
                .waitForElementPresent(resultsItem + '.expanded', 3000)
                .getText(header, function (result) {

                    var original = carousel + ' .original .links a'
                    var transformed = carousel + ' .transformed .links a:nth-child(1)'
                    var transformedDownload = carousel + ' .transformed .links a:nth-child(2)'
                    var dynamic = carousel + ' .dynamic .links a:nth-child(1)';
                    var dynamicDownload = carousel + ' .dynamic .links a:nth-child(2)'

                    function checkOriginal(selector, browser) {
                        return browser
                            .click(selector)
                            .windowHandles(function (result) {
                                var newWindow;
                                browser.verify.equal(result.value.length, 2);
                                newWindow = result.value[1];
                                browser.switchWindow(newWindow)
                                    .waitForElementVisible('body', 3000)
                                    .verify.urlContains('res.cloudinary.com/webspeedtest/image/upload')
                                    .closeWindow()
                                    .switchWindow(result.value[0])
                            })
                    }

                    function checkTransformed(selector, browser) {

                        return browser.click(selector)
                            .windowHandles(function (result) {
                                var newWindow;
                                browser.verify.equal(result.value.length, 2);
                                newWindow = result.value[1];
                                browser.switchWindow(newWindow)
                                    .waitForElementVisible('body', 3000)
                                    .verify.urlContains('q_auto')
                                    .closeWindow()
                                    .switchWindow(result.value[0])
                            })

                    }

                    function checkTransformedDownload(selector, browser) {
                        return browser.getAttribute(selector, 'href', function (result) {
                            browser.assert.equal(result.value.includes('q_auto'), true);
                        })
                    }

                    function checkDynamic(selector, tabName, browser) {
                        var format;

                        if (tabName === 'WEBP') {
                            format = 'f_webp'
                        } else if (tabName === 'PNG') {
                            format = 'f_png'
                        } else {
                            format = 'f_wdp'
                        }

                        return browser.click(selector)
                            .windowHandles(function (result) {
                                var newWindow;
                                browser.verify.equal(result.value.length, 2);
                                newWindow = result.value[1];
                                browser.switchWindow(newWindow)
                                    .waitForElementVisible('body', 3000)
                                    .verify.urlContains(format)
                                    .closeWindow()
                                    .switchWindow(result.value[0])
                            })
                    }

                    function checkDynamicDownload(selector, tabName, browser) {

                        var format;

                        if (tabName === 'WEBP') {
                            format = 'f_webp'
                        } else if (tabName === 'PNG') {
                            format = 'f_png'
                        } else {
                            format = 'f_wdp'
                        }

                        return browser
                            .getAttribute(selector, 'href', function (result) {
                                browser.assert.equal(result.value.includes(format), true);
                            })
                    }

                    switch (result.value) {

                        case 'MickeyArt.webp':

                            checkOriginal(original, this)
                            checkTransformed(transformed, this)
                            checkTransformedDownload(transformedDownload, this)
                            checkDynamicDownload(dynamicDownload, 'JPEG-XR', this);

                            this.click(carousel + ' .dynamic ul li:nth-child(2)');

                            checkDynamic(dynamic, 'PNG', this);
                            checkDynamicDownload(dynamicDownload, 'PNG', this);

                            break;

                        case 'Mickey_Mouse.png':

                            checkOriginal(original, this)
                            checkTransformed(transformed, this)
                            checkTransformedDownload(transformedDownload, this)
                            checkDynamic(dynamic, 'WEBP', this);
                            checkDynamicDownload(dynamicDownload, 'WEBP', this);

                            break;
                        case 'a58ecacebad44ed0c8e32aa9a64727e1.jpg':

                            checkOriginal(original, this)
                            checkTransformed(transformed, this)
                            checkTransformedDownload(transformedDownload, this)
                            checkDynamicDownload(dynamicDownload, 'JPEG-XR', this);

                            this.click(carousel + ' .dynamic ul li:nth-child(2)');

                            checkDynamic(dynamic, 'PNG', this);
                            checkDynamicDownload(dynamicDownload, 'PNG', this);

                            break;
                        case '212482.jpg':

                            checkOriginal(original, this)
                            checkTransformed(transformed, this)
                            checkTransformedDownload(transformedDownload, this)
                            checkDynamic(dynamic, 'WEBP', this);
                            checkDynamicDownload(dynamicDownload, 'WEBP', this);

                            this.click(carousel + ' .dynamic ul li:nth-child(2)');

                            checkDynamic(dynamic, 'PNG', this);
                            checkDynamicDownload(dynamicDownload, 'PNG', this);


                            break;
                        case '386870.jpg':

                            checkOriginal(original, this)
                            checkTransformed(transformed, this)
                            checkTransformedDownload(transformedDownload, this)
                            checkDynamic(dynamic, 'WEBP', this);
                            checkDynamicDownload(dynamicDownload, 'WEBP', this);

                            this.click(carousel + ' .dynamic ul li:nth-child(2)');

                            checkDynamic(dynamic, 'PNG', this);
                            checkDynamicDownload(dynamicDownload, 'PNG', this);

                            break;

                        case '590847e65b32c851033a9ca1ca26d903.jpg':

                            checkOriginal(original, this)
                            checkTransformed(transformed, this)
                            checkTransformedDownload(transformedDownload, this)
                            checkDynamic(dynamic, 'WEBP', this);
                            checkDynamicDownload(dynamicDownload, 'WEBP', this);

                            this.click(carousel + ' .dynamic ul li:nth-child(2)');

                            checkDynamicDownload(dynamicDownload, 'JPEG-XR', this);

                            this.click(carousel + ' .dynamic ul li:nth-child(3)');

                            checkDynamic(dynamic, 'PNG', this);
                            checkDynamicDownload(dynamicDownload, 'PNG', this);

                            break;
                        case 'Mickey-Face-Clipart-mickey-and-friends-37612599-256-256.png':

                            checkOriginal(original, this)
                            checkTransformed(transformed, this)
                            checkTransformedDownload(transformedDownload, this)
                            checkDynamic(dynamic, 'WEBP', this);
                            checkDynamicDownload(dynamicDownload, 'WEBP', this);

                            break;

                        case '310qpmPNfIL._CR0,0,175,175_UX128.jpg':

                            checkOriginal(original, this)
                            checkTransformed(transformed, this)
                            checkTransformedDownload(transformedDownload, this)
                            checkDynamicDownload(dynamicDownload, 'JPEG-XR', this);

                            this.click(carousel + ' .dynamic ul li:nth-child(2)');

                            checkDynamic(dynamic, 'PNG', this);
                            checkDynamicDownload(dynamicDownload, 'PNG', this);


                            break;

                        case 'b386037ee62d835421af74a582667c3f37fa2741_128.jpg':

                            checkOriginal(original, this)
                            checkTransformed(transformed, this)
                            checkTransformedDownload(transformedDownload, this)
                            checkDynamicDownload(dynamicDownload, 'JPEG-XR', this);

                            this.click(carousel + ' .dynamic ul li:nth-child(2)');

                            checkDynamic(dynamic, 'PNG', this);
                            checkDynamicDownload(dynamicDownload, 'PNG', this);

                            break;

                        case 's-l96.jpg':

                            checkOriginal(original, this)
                            checkTransformed(transformed, this)
                            checkTransformedDownload(transformedDownload, this)
                            checkDynamic(dynamic, 'WEBP', this);
                            checkDynamicDownload(dynamicDownload, 'WEBP', this);

                            this.click(carousel + ' .dynamic ul li:nth-child(2)');

                            checkDynamic(dynamic, 'PNG', this);
                            checkDynamicDownload(dynamicDownload, 'PNG', this);

                            break;
                    }

                })
                .click(resultsItem + ' button[data-state=toggle-hide]')
                .waitForElementNotPresent(resultsItem + '.expanded', 3000)
                .api.pause(500, function () {

                    index++;

                    if (index > this.globals.imagesName.length) {
                        return;
                    }

                    self.checkOpenWindowAndSave(index);
                })


        }
    }],
    props: {
        resultsTimeout: 180000
    },

};