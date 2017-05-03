'use strict';
const express = require('express');
const request = require('request');
const resultParser = require('../wtp/wtpResultsParser');

const RESULTS_URL = 'https://www.webpagetest.org/jsonResult.php';


const wtp = (app) => {
    app.get('/test/:testId', function (req, res, next) {
        let testId = req.params.testId;
        let results = getTestResults(testId);
    });


    const getTestResults = (testId) => {
        let options = {
            url: RESULTS_URL,
            qs: {test: testId}
        };
        request.get(options, (error, response, body) => {
            if (error) {
                //TODO: handel
            }
            if (response && response.statusCode !== 200) {
                //TODO: handel
            }
            if (!body) {
                //TODO: handel
            }
            return resultParser.wtpResParser(JSON.parse(body));
        })


    };
};

module.exports = wtp;
