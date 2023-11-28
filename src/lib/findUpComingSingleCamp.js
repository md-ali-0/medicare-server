const UpComingCamp = require("../models/UpComingCamp");

const findUpComingSingleCamp = async (filter) => {
    
    const cursor = await UpComingCamp.findOne(filter);
    return cursor;
};

module.exports = findUpComingSingleCamp;
