const conf = {
    "images": {
        "maxNumberOfImages": process.env.MAX_IMGES || 50,
        "maxImageSize": process.env.MAX_IMAGE_SIZE || 5,
        "maxImageRes": process.env.MAX_IMAGE_RES || 10,
    }
};

module.exports = conf;