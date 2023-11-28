const UpComingCamp = require("../models/UpComingCamp");

const findUpcomingCamps = async () => {
    const cursor = await UpComingCamp.find()
    return cursor;
};

module.exports = findUpcomingCamps;
