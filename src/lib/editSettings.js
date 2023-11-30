const Settings = require("../models/Setting");

const editSettings = async (updatedCampData) => {
    try {
        const cursor = await Settings.findOneAndUpdate({},updatedCampData,{ new: true }, { upsert: true });
        return cursor;
    } catch (error) {
        throw new Error("Error adding camp");
    }
};

module.exports = editSettings;
