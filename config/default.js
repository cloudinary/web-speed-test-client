const conf = {
    "images": {
        "maxNumberOfImages": process.env.MAX_IMGES || 50,
        "maxImageSize": process.env.MAX_IMAGE_SIZE || 5,
        "maxImageRes": process.env.MAX_IMAGE_RES || 10,
    },
    "wtp": {
        "apiKey": process.env.WTP_API_KEY,
    },
    "cloudinary": {
        "cloudName": process.env.CLOUDINARY_NAME,
        "apiKey": process.env.CLOUDINARY_API,
        "secret": process.env.CLOUDINARY_SEACRET,
        "batchSize": process.env.CLOUDINARY_BATCH || 50
    }
};

module.exports = conf;