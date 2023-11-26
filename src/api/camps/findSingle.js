const findSingleCamp = require("../../lib/findSingleCamp");
const ObjectId = require('mongoose').Types.ObjectId
const findSingle = async (req, res) => {
    const id = req.params.campId;
    const filter = {
        _id: new ObjectId(id)
    }
    const singleCamp = await findSingleCamp(filter);
    res.send(singleCamp);
};

module.exports = findSingle;
