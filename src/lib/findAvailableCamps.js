const Camp = require("../models/Camp");

const findAvailableCamps = async (filter) => {
    let sortBy;
    if (filter.sort === 'register') {
        sortBy = {participantCount: -1,}
    } else if (filter.sort === 'audience') {
        sortBy = {targetAudience: 1,}
    } else if (filter.sort === 'camp'){
        sortBy = {campName: 1,}
    }
    const query = {
        status: "active",
        $or: [
            { campName: { $regex: filter.search, $options: "i" } },
            { scheduledDate: { $regex: filter.search, $options: "i" } },
            { scheduledTime: { $regex: filter.search, $options: "i" } },
            { specializedServices: { $regex: filter.search, $options: "i" } },
            { targetAudience: { $regex: filter.search, $options: "i" } },
            { venueLocation: { $regex: filter.search, $options: "i" } },
        ],
    };

    const cursor = await Camp.find(query).sort(sortBy);
    return cursor;
};

module.exports = findAvailableCamps;
