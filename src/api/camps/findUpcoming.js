const findUpcomingCamps = require("../../lib/findUpcomingCamps");

const findUpcoming = async (req, res) => {
    const filter = req.query;
    const upcomingCamps = await findUpcomingCamps(filter);
    res.send(upcomingCamps);
};

module.exports = findUpcoming;
