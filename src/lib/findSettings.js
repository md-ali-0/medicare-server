const Settings = require("../models/Setting");

const findSettings = async () => {

    const cursor = await Settings.findOne();
    return cursor;
};

module.exports = findSettings;
