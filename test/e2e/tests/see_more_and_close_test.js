module.exports = {

    'See more or Close detailed information buttons': function (browser) {
        var analyzeUrl = browser.globals.analyzeUrl;

        browser
            .init()
            .maximizeWindow()
            .waitForElementVisible('body', 3000)
            .setValue('input[name=testid]', analyzeUrl)
            .click('button[type=submit]')
            .waitForElementVisible('.results', 120000)
            .checkResultsItem()
            .end();
    }
};