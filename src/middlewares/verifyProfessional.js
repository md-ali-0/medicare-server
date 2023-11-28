const verifyUserRole = require('../lib/verifyUserRole')
const verifyProfessional = async (req, res, next) => {
    const email = req.user.email;
    const role = await verifyUserRole(email);
    if (role !== "healthcare_professional") {
        return res.status(403).send({ message: "forbidden access" });
    }
    next();
};

module.exports = verifyProfessional