const editCamp = require('../../lib/editCamp')
const updateCamp = async (req, res) => {
    const id = req.params.campId
    const updatedCampData = req.body;
    try {
        const result = await editCamp(id, updatedCampData);
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: false, InsertedId: null })
    }
};

module.exports = updateCamp;
