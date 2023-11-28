const Camp = require("../models/Camp");

const editCamp = async (id, updatedCampData) => {
    try {
        const cursor = await Camp.findOneAndUpdate(
            { _id: id },
            { $set: updatedCampData },
            { new: true }
        );
        return cursor;
    } catch (error) {
        throw new Error("Error adding camp");
    }
};

module.exports = editCamp;
