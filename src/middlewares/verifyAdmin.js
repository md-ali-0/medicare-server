const verifyUserRole = require('../lib/verifyUserRole')
const verifyAdmin = async (req, res, next) => {
    const email = req.user.email;
    const role = await verifyUserRole(email);
    if (role !== "admin") {
        return res.status(403).send({ message: "forbidden access" });
    }
    next();
};

module.exports = verifyAdmin