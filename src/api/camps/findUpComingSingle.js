const findUpComingSingleCamp = require("../../lib/findUpComingSingleCamp");
const ObjectId = require('mongoose').Types.ObjectId
const findUpComingSingle = async (req, res) => {
    const id = req.params.campId;
    const filter = {
        _id: new ObjectId(id)
    }
    const singleUpComingCamp = await findUpComingSingleCamp(filter);
    res.send(singleUpComingCamp);
};

module.exports = findUpComingSingle;
