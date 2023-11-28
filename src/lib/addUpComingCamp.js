const UpComingCamp = require("../models/UpComingCamp");

const addUpComingCamp = async (camp) => {
    const NewUpComingCamp = new UpComingCamp(camp)
    try {
        const cursor = await NewUpComingCamp.save();
        return cursor;
    } catch (error) {
        throw new Error('Error adding NewUpComingCamp');
    }
};

module.exports = addUpComingCamp;
