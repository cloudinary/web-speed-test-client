/**
 * Created by yaniv on 5/8/17.
 */

'use strict';
require('dotenv').config();
const logger = require('winston');
const config = require('config');
const _ = require('lodash');
const cloudinaryParser = require('./cloudinaryResultParser');
const cloudinary = require('cloudinary');

// cloudinary.config({
//     cloud_name: config.get('cloudinary.cloudName'),
//     api_key: config.get('cloudinary.apiKey'),
//     api_secret: config.get('cloudinary.secret')
// });

/** @param {Array} imagesArray */
const sentToAnalyze = (imagesArray, dpr, res) => {
    let numOfImages = imagesArray.length;
    let batchSize = config.get('cloudinary.batchSize');
    let chunks = _.chunk(imagesArray, batchSize);
    let chunksDelay = chunks.length > 1 ? config.get('cloudinary.chunkDelay') : 0;
    let analyzeResults = [];
    for (const chunk of chunks) {
        setTimeout(() => {
            for (const image of chunk) {
                let context = {
                   rendered_dimensions: {width: image.width, height: image.height},
                    dpr: dpr
                }; //TODO: add analyse parameter once once added to API
                cloudinary.uploader.upload(image.url, (result) => {
                    if (result.error) {
                        analyzeResults.push({public_id: null});
                        logger.error('Error uploading to cloudinary', result);
                    } else {
                        analyzeResults.push(result);
                    }
                    if (analyzeResults.length === numOfImages) {
                        let parsed = cloudinaryParser.parseCloudinaryResults(analyzeResults);
                        res.json(parsed);
                    }
                });
            }
        }, chunksDelay);
    }
};

module.exports = sentToAnalyze;


