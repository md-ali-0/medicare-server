const Camp = require("../models/Camp");

const findUpcomingCamps = async (filter) => {
    const cursor = await Camp.find(filter).sort();
    return cursor;
};

module.exports = findUpcomingCamps;
