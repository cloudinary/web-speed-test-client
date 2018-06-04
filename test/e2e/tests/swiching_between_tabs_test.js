module.exports = {

    before: function (browser) {
        var main = browser.page.mainPage();

        main
            .load()
            .fillAnalyzeUrlField()
            .submit()
    },

    'Switching between Format Alternatives tabs': function (browser) {
        var result = browser.page.resultPage();

        result.load();
        result.checkTabItem(1);

    },

    after: function (browser) {
        browser.end();
    }

};