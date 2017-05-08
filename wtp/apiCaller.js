/**
 * Created by yaniv on 5/7/17.
 */

"use strict";


const request = require('request');
const config = require('config');
const resultParser = require('../wtp/wtpResultsParser');
const cloudinaryCaller = require('../cloudinary/apiCaller');
const RESULTS_URL = 'https://www.webpagetest.org/jsonResult.php';
const RUN_TEST_URL = 'http://www.webpagetest.org/runtest.php';
const GET_TEST_STATUS = 'http://www.webpagetest.org/testStatus.php';


const getTestResults = (testId, res) => {
    let options = {
        url: RESULTS_URL,
        qs: {test: testId}
    };
    request.get(options, (error, response, body) => {
        if (error) {
            res.json({status: 'error', message: 'Error calling WTP', error: error});
            return
        }
        if (response && response.statusCode !== 200) {
            res.json({status: 'error', message: 'WTP returned bad status', error: response.statusCode});
            return
        }
        if (!body) {
            res.json({status: 'error', message: 'WTP returned empty body', error: 'empty body'});
            return
        }
        let wtpRes = resultParser.parseTestResults(JSON.parse(body));
        cloudinaryCaller(wtpRes, res);

    })
};

const runWtpTest = (url, res) => {

    let options = {
        'url': RUN_TEST_URL,
        'qs': {url:url, k:config.get('wtpApiKey'), f:"json"}
    };
    request.get(options, (error, response, body) => {
        if (error) {
            res.json({status: 'error', message: 'Error calling WTP', error: error});
            return;
        }
        if (response && response.statusCode !== 200) {
            res.json({status: 'error', message: 'WTP returned bad status', error: response.statusCode});
            return;
        }
        if (!body) {
            res.json({status: 'error', message: 'WTP returned empty body', error: 'empty body'});
            return;
        }
        let testId = resultParser.parseTestResponse(JSON.parse(body));
        if (typeof testId === 'object') {
            res.json(testId);
            return;
        }
        checkTestStatus(testId, res);
    });
};

const checkTestStatus = (testId, res) => {
    let options = {
        'url': GET_TEST_STATUS,
        'qs': {test:testId, k:config.get('wtp.apiKey'), f:"json"}
    };
    request.get(options, (error, response, body) => {
       if (error) {
           res.json({status: 'error', message: 'Error calling WTP', error: error});
           return;
       }
       if (response && response.statusCode !== 200) {
           res.json({status: 'error', message: 'WTP returned bad status', error: response.statusCode});
           return;
       }
       let testRes = JSON.parse(body);
       if (testRes.statusCode >= 400) {
           res.json({status: 'error', message: 'WTP returned bad status', error: testRes.statusText});
           return;
       }
       if (testRes.statusCode === 200) {
           getTestResults(testId, res);
       }
       if (testRes.statusCode >= 100 && testRes.statusCode < 200) {
           setTimeout(() => {checkTestStatus(testId, res)}, 1000)
       }
    });

};

module.exports = {
    getTestResults: getTestResults,
    runWtpTest: runWtpTest
};