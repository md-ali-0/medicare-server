const updateRegisteredCamp = require("../../lib/updateRegisteredCamp");
const updateRegistered = async (req, res) => {
    const id =req.params.campId
    const newStatus = req.query;
    const updatedCamp = await updateRegisteredCamp(id, newStatus);
    res.send(updatedCamp);
};

module.exports = updateRegistered;
