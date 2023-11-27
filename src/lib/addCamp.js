const Camp = require("../models/Camp");

const addCamp = async (camp) => {
    const NewCamp = new Camp(camp)
    try {
        const cursor = await NewCamp.save();
        return cursor;
    } catch (error) {
        throw new Error('Error adding camp');
    }
};

module.exports = addCamp;
