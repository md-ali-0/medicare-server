const addAttendedCamp = require("../../lib/addAttendedCamp");
const addAttended = async (req, res) => {
    const newCampAttended = req.body
    const addedCamp = await addAttendedCamp(newCampAttended);
    res.send(addedCamp);
};

module.exports = addAttended;
