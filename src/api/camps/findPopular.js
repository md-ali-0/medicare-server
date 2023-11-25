const findPopularCamps = require("../../lib/findPopularCamps");

const findPopular = async (req, res) => {
    const filter = req.query;

    const popularCamps = await findPopularCamps(filter);
    res.send(popularCamps);
};

module.exports = findPopular;
