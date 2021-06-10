'use strict';
require('dotenv').config();
const fs = require('fs');
const IMAGES_PATH = './src/assets/images';
const async = require('async');
const path = require('path');
const UPLOAD_LIMIT = 50;
const cloudinary = require('cloudinary');

const uploadImages = (imagesPath) => {
  console.log('Read dir ' + imagesPath);
  const files = fs.readdirSync(imagesPath);
  console.log('Uploading ' + files.length + ' files');
  return async.eachLimit(
    files,
    UPLOAD_LIMIT,
    (fileName, callback) => {
      console.log('Uploading ' + fileName.replace(/\.[^/.]+$/, ''));
      cloudinary.v2.uploader.unsigned_upload(
        path.join(imagesPath, fileName),
        process.env.CLOUDINARY_UPLOAD_PRESET,
        {
          public_id: fileName.replace(/\.[^/.]+$/, ''),
          tags: ['static'],
          // type: 'asset',
        },
        (result) => {
          console.log(result);
          callback()
        }
      );
    },
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Done');
    }
  );
};

uploadImages(IMAGES_PATH);
