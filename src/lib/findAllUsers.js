const User = require("../models/User");

const findAllUsers = async (filter) => {
    let query = {}
    if (filter.role) {
        query.role = filter.role
    }
    const cursor = await User.find(query);
    return cursor;
};

module.exports = findAllUsers;
