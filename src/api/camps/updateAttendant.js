const updateAttendantCamp = require('../../lib/updateAttendantCamp');
const updateAttendant = async (req, res) => {
    const id = req.params.campId
    const newStatus = req.query;
    try {
        const result = await updateAttendantCamp(id, newStatus);
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: false, InsertedId: null })
    }
};

module.exports = updateAttendant;
