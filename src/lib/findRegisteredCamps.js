const RegisteredCamp = require("../models/RegisteredCamp");

const findPopularCamps = async (filter) => {

    let query =  {}
    if (filter.createdBy) {
        query.createdBy = filter.createdBy
    }
    const cursor = await RegisteredCamp.find(query).sort();
    return cursor;
};

module.exports = findPopularCamps;
