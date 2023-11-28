const updateUpComingCampStatus = require("../../lib/updateUpComingCampStatus");
const updateUpComingStatus = async (req, res) => {
    const id =req.params.campId
    const newStatus = req.query;
    const updatedCamp = await updateUpComingCampStatus(id, newStatus);
    res.send(updatedCamp);
};

module.exports = updateUpComingStatus;
