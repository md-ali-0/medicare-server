const deleteSingleCamp = require('../../lib/deleteSingleCamp')
const removeCamp = async (req, res) => {
    const id = req.params.campId
    try {
        const result = await deleteSingleCamp(id);
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: false})
    }
};

module.exports = removeCamp;
