const Camp = require("../models/Camp");

const deleteSingleCamp = async (id) => {
    try {
        const cursor = await Camp.findOneAndDelete({ _id: id });
        return cursor;
    } catch (error) {
        throw new Error("Error adding camp");
    }
};

module.exports = deleteSingleCamp;
