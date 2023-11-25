const Camp = require("../models/Camp");

const findPopularCamps = async (filter) => {
    console.log(filter);
    const options = {
        sort: {
            participantCount: filter.sort === 'asc' ? 1 : -1
        }
    };
    console.log(options.sort);
    const cursor = await Camp.find().sort(options.sort);
    return cursor;
};

module.exports = findPopularCamps;
