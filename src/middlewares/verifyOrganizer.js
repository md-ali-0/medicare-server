const verifyUserRole = require('../lib/verifyUserRole')
const verifyOrganizer = async (req, res, next) => {
    const email = req.user.email;
    const role = await verifyUserRole(email);
    if (role !== "organizer") {
        return res.status(403).send({ message: "forbidden access" });
    }
    next();
};

module.exports = verifyOrganizer