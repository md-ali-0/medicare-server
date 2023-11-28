const UpComingCamp = require("../models/UpComingCamp");

const updateUpComingCampStatus = async (id, newStatus) => {
    try {
        const cursor = await UpComingCamp.findOneAndUpdate(
            { _id: id },
            { $set: newStatus },
            { new: true }
        );
        return cursor;
    } catch (error) {
        throw new Error("Error adding user");
    }
};

module.exports = updateUpComingCampStatus;
