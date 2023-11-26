const findAllReviews = require("../../lib/findAllReviews");

const findAll = async (req, res) => {
    const filter = req.query;

    const allReviews = await findAllReviews(filter);
    res.send(allReviews);
};

module.exports = findAll;
