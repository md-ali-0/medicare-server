const Camp = require("../models/Camp");

const editCampParticipantCount = async (id) => {
    try {
        const cursor = await Camp.findOneAndUpdate(
            { _id: id },
            {$inc: { participantCount: 1 }},
            { new: true }
        );
        return cursor;
    } catch (error) {
        throw new Error("Error adding camp");
    }
};

module.exports = editCampParticipantCount;
