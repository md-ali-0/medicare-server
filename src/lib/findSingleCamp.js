const Camp = require("../models/Camp");

const findSingleCamp = async (filter) => {
    
    const cursor = await Camp.findOne(filter);
    return cursor;
};

module.exports = findSingleCamp;
