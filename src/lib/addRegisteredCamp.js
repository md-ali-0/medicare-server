const RegisteredCamp = require("../models/RegisteredCamp");

const addRegisteredCamp = async (newCampRegister) => {
    const addCamp = new RegisteredCamp(newCampRegister)
    try {
        const cursor = await addCamp.save();
        return cursor;
    } catch (error) {
        throw new Error('Error adding user');
    }
};

module.exports = addRegisteredCamp;
