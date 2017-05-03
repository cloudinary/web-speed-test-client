/**
 * Created by yaniv on 5/3/17.
 */

'use strict';

const _ = require('lodash');
const config = require('config');
const bytes = require('bytes');

const parseTestResults = (testJson) => {
    let imageList = JSON.parse(_.get(testJson, 'data.median.firstView.Images'));
    let requestsData = _.get(testJson, 'data.median.firstView.requests');
    if (!imageList || !requestsData) {
        //TODO: handel error
    }
    imageList = imageList.splice(0, config.get('images.maxNumberOfImages'));
    imageList = _.forEach(imageList, (image) => {
        let imageData = _.find(requestsData, (imgData) => {
           return imgData.full_url === image.url;
        });
        image.size = imageData.image_total
    });

    return imageList;
};

const filterByImageSize = (imageList) => {
    let maxSizeInBytes = bytes(config.get('images.maxImageSize') + 'mb');
    return _.filter(imageList, (image) => {
       return image.size <= maxSizeInBytes;
    });
};

const filterByResoution = (imageList) => {
  let maxRes = config.get('images.maxImageRes') * 1000000;

};

exports.wtpResParser = parseTestResults;
