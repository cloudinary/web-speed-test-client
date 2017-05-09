/**
 * Created by yaniv on 5/8/17.
 */

const mock = require('./mock.json');

"use strict";

const parseCloudinaryResults = (results) => {
    let parsed = [];
    for(const result of results) {
        if (result.public_id) {
            injectMock(result);
            parsed.push(result);
        }
    }
    return parsed;
};

const injectMock = (item) => {
    let rand = Math.round(Math.random() * (49)) ;
    item.analyze = mock[rand].analyze;
};


module.exports = {
    parseCloudinaryResults: parseCloudinaryResults
};