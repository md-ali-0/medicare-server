const addUpComingCamp = require('../../lib/addUpComingCamp')
const createUpComing = async (req, res) => {
    const camp = req.body;
    try {
        const result = await addUpComingCamp(camp);
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: false, InsertedId: null })
    }
};

module.exports = createUpComing;
