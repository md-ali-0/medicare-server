const editUpComingCamp = require('../../lib/editUpComingCamp');
const updateUpComing = async (req, res) => {
    const id = req.params.campId
    const updatedUpComingData = req.body;
    try {
        const result = await editUpComingCamp(id, updatedUpComingData);
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: false, InsertedId: null })
    }
};

module.exports = updateUpComing;
