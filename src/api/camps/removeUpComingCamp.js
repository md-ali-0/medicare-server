const deleteSingleUpComingCamp = require('../../lib/deleteSingleUpComingCamp');
const removeUpComingCamp = async (req, res) => {
    const id = req.params.campId
    try {
        const result = await deleteSingleUpComingCamp(id);
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: false})
    }
};

module.exports = removeUpComingCamp;
