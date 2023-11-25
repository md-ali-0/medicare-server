const Camp = require("../models/Camp");

const findAllCamps = async (filter) => {
    const cursor = await Camp.find();
    return cursor;
};

module.exports = findAllCamps;
