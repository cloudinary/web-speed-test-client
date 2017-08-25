module.exports = {
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
        analyzeUrlField: 'input[name=testid]',
        submitButton: 'button[type=submit]'
    },
    commands: [{
        load: function () {
            return this
                .navigate()
                .waitForElementVisible('body', 1000)
        },
        fillAnalyzeUrlField: function () {
            return this.setValue('@analyzeUrlField', this.api.globals.analyzeUrl)
        },
        submit: function () {
            return this.click('@submitButton')
        }
    }]

};