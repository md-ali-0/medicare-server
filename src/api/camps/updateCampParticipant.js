const editCampParticipantCount = require('../../lib/editCampParticipantCount');
const updateCampParticipant = async (req, res) => {
    const id = req.params.campId
    try {
        const result = await editCampParticipantCount(id);
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: false, InsertedId: null })
    }
};

module.exports = updateCampParticipant;
