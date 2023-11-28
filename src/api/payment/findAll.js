const findAllPayments = require("../../lib/findAllPayments");

const findAll = async (req, res) => {
    try {
        const findPayments = await findAllPayments()
        res.send(findPayments)
    } catch (error) {
        throw new Error('error from receiving payments data')
    }
};

module.exports = findAll;
