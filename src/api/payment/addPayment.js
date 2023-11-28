const createPayment = require('../../lib/createPayment');
const addPayment = async (req, res) => {
    const payment = req.body;
    try {
        const result = await createPayment(payment);
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: false, InsertedId: null })
    }
};

module.exports = addPayment;
