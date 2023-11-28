const findRegisteredCamps = require("../../lib/findRegisteredCamps");

const registeredCamp = async (req, res) => {
    const filter = req.query;
    
    const registeredCamps = await findRegisteredCamps(filter);
    res.send(registeredCamps);
};

module.exports = registeredCamp;
