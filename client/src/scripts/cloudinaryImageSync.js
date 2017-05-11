'use strict';
require('dotenv').config();
const fs = require('fs');
const IMAGES_PATH = './src/assets/images';
const UPLOAD_PATH = 'assets/images';
const async = require('async');
const path = require('path');
const UPLOAD_LIMIT = 50;
const cloudinary = require('cloudinary');

const uploadImages = imagesPath => {

  console.log("read dir " + imagesPath)
  const files = fs.readdirSync(imagesPath);
  console.log("uploading " + files.length + " files");
  return async.eachLimit(files, UPLOAD_LIMIT, (fileName, callback) => {
    const publicId = path.join(UPLOAD_PATH, fileName);
    cloudinary.uploader.upload(path.join(imagesPath, fileName),
      result => callback(),
      {public_id: publicId, tags: ['static'], 'resource_type': 'image'}
    )
  }, err => {
    if (err) {
      console.log(err)
      return;
    }
    console.log('done');
  })

}

uploadImages(IMAGES_PATH);
