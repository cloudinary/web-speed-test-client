'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');

const RESULTS_URL = 'https://www.webpagetest.org/jsonResult.php';

/* GET users listing. */
router.get('/test/:testId', function(req, res, next) {

  res.send('respond with a resource');
});


const getTestResults = (testId) => {
    let options = {
        baseUrl: RESULTS_URL,
        qs: {test: testId}
    };
    request.get(options)


};


module.exports = router;
