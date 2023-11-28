const AttendedCamp = require("../models/AttendedCamp");

const addAttendedCamp = async (newCampAttended) => {
    const addCamp = new AttendedCamp(newCampAttended)
    try {
        const cursor = await addCamp.save();
        return cursor;
    } catch (error) {
        throw new Error('Error adding user');
    }
};

module.exports = addAttendedCamp;
