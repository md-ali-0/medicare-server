const RegisteredCamp = require("../models/RegisteredCamp");

const updateRegisteredCamp = async (id, newStatus) => {
    try {
        const cursor = await RegisteredCamp.findOneAndUpdate(
            { _id: id },
            { $set: newStatus },
            { new: true }
        );
        return cursor;
    } catch (error) {
        throw new Error("Error adding user");
    }
};

module.exports = updateRegisteredCamp;
