module.exports = {

    before: function (browser) {
        var main = browser.page.mainPage();

        main
            .load()
            .fillAnalyzeUrlField()
            .submit()
    },

    'Opening images in new tab and saving them': function (browser) {
        var result = browser.page.resultPage();

        result.load();
        result.checkOpenWindowAndSave(1);

    },

    after: function (browser) {
        browser.end();
    }

};