const addCamp = require('../../lib/addCamp')
const createCamp = async (req, res) => {
    const camp = req.body;
    try {
        const result = await addCamp(camp);
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: false, InsertedId: null })
    }
};

module.exports = createCamp;
