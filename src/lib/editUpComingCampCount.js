const UpComingCamp = require("../models/UpComingCamp");

const editUpComingCampCount = async (id, updateCount) => {
    try {
        const cursor = await UpComingCamp.findOneAndUpdate(
            { _id: id },
            {$inc: updateCount},
            { new: true }
        );
        return cursor;
    } catch (error) {
        throw new Error("Error adding camp");
    }
};

module.exports = editUpComingCampCount;
