const UpComingCamp = require("../models/UpComingCamp");

const deleteSingleUpComingCamp = async (id) => {
    try {
        const cursor = await UpComingCamp.findOneAndDelete({ _id: id });
        return cursor;
    } catch (error) {
        throw new Error("Error adding camp");
    }
};

module.exports = deleteSingleUpComingCamp;
