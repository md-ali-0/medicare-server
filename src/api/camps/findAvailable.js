const findAvailableCamps = require("../../lib/findAvailableCamps");

const findAvailable = async (req, res) => {
    const filter = req.query;

    const availableCamps = await findAvailableCamps(filter);
    res.send(availableCamps);
};

module.exports = findAvailable;