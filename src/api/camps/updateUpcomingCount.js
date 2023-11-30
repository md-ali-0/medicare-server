const editUpComingCampCount = require("../../lib/editUpComingCampCount");
const updateUpcomingCount = async (req, res) => {
    const id = req.params.campId;
    const updateCount = req.body;
    const updatedCamp = await editUpComingCampCount(id, updateCount);
    res.send(updatedCamp);
};

module.exports = updateUpcomingCount;
