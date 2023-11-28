const UpComingCamp = require("../models/UpComingCamp");

const findUpcomingCamps = async (filter) => {
    let query ={};
    if (filter.createdBy) {
        query.createdBy = filter.createdBy
    }
    const cursor = await UpComingCamp.find(query)
    return cursor;
};

module.exports = findUpcomingCamps;
