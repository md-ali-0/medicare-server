const addRegisteredCamp = require("../../lib/addRegisteredCamp");
const addRegistered = async (req, res) => {
    const newCampRegister = req.body
    const addedCamp = await addRegisteredCamp(newCampRegister);
    res.send(addedCamp);
};

module.exports = addRegistered;
