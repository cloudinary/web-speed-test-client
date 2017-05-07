const conf = {
    "images": {
        "maxNumberOfImages": process.env.MAX_IMGES || 50,
        "maxImageSize": process.env.MAX_IMAGE_SIZE || 5,
        "maxImageRes": process.env.MAX_IMAGE_RES || 10,
    },
    "wtpApiKey": process.env.WTP_API_KEY || "A.a02dfdfbf82702acfc8555379a5ec3e1"
};

module.exports = conf;