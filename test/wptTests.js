/**
 * Created by yaniv on 5/3/17.
 */

'use strict';

const assert = require('assert');
const wtpParser = require('../wtp/wtpResultsParser');
const fs = require('fs');

describe('Parse WPT result', () => {
    describe('Get image array', () => {
       it('Retrieve the Images array from the WPT result', () => {
           let resultJson = JSON.parse(fs.readFileSync('./test/resources/test1.json'));
           wtpParser.wtpResParser(resultJson);

       });
    });
});