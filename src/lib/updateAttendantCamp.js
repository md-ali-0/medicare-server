const AttendedCamp = require("../models/AttendedCamp");

const updateAttendantCamp = async (id, newStatus) => {
    try {
        const cursor = await AttendedCamp.findOneAndUpdate(
            { _id: id },
            { $set: newStatus },
            { new: true }
        );
        return cursor;
    } catch (error) {
        throw new Error("Error adding user");
    }
};

module.exports = updateAttendantCamp;
