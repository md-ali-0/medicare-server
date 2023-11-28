const findUpcomingCamps = require("../../lib/findUpcomingCamps");

const findUpcoming = async (req, res) => {
    const upcomingCamps = await findUpcomingCamps();
    res.send(upcomingCamps);
};

module.exports = findUpcoming;
