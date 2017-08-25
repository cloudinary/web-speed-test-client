module.exports = {

    before: function (browser) {
        var main = browser.page.mainPage();

        main
            .load()
            .fillAnalyzeUrlField()
            .submit()
    },

    'See more or Close detailed information buttons': function (browser) {
        var imagesName = browser.globals.imagesName;
        var result = browser.page.resultPage();

        result.load()

        for (var i = 0; i < imagesName.length; i++) {
            result.clickOnSeeMoreButton(i);
            result.checkImageName(i, imagesName[i]);
            result.verifyBlocks(i);
            result.clickOnCloseButton(i);
        }

    },

    after: function (browser) {
        browser.end();
    }

};