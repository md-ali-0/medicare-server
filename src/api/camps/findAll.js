const findAllCamps = require("../../lib/findAllCamps");

const findAll = async (req, res) => {
    const filter = req.query;

    const allCamps = await findAllCamps(filter);
    res.send(allCamps);
};

module.exports = findAll;
