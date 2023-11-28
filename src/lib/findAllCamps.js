const Camp = require("../models/Camp");

const findAllCamps = async (filter) => {
    let query ={};
    if (filter.createdBy) {
        query.createdBy = filter.createdBy
    }
    const cursor = await Camp.find(query);
    return cursor;
};

module.exports = findAllCamps;
