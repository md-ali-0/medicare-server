const UpComingCamp = require("../models/UpComingCamp");

const editUpComingCamp = async (id, updatedUpComingData) => {
    try {
        const cursor = await UpComingCamp.findOneAndUpdate(
            { _id: id },
            { $set: updatedUpComingData },
            { new: true }
        );
        return cursor;
    } catch (error) {
        throw new Error("Error adding camp");
    }
};

module.exports = editUpComingCamp;
