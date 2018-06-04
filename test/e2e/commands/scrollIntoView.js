exports.command = function (selector) {
    var self = this;

    this.execute(function (selector) {
        document.querySelector(selector).scrollIntoView()
    }, [selector]);

    return this;
};