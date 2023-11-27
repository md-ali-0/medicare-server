const verifyUserRole = require('../../lib/verifyUserRole')
const verifyUser = async (req, res) => {
    const email = req.params.email;
    try {
        const result = await verifyUserRole(email);
        res.send(result);
    } catch (error) {
        return res.status(404).send({ massage: 'user not found' })
    }
};

module.exports = verifyUser;
