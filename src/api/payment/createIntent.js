const createPaymentIntent = require("../../lib/createPaymentIntent");

const createIntent = async (req, res) => {
    const { price } = req.body;
    const amount = parseInt(price * 100);

    try {
        const paymentIntent = await createPaymentIntent(amount);
        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        return res.send({ massage: 'payment create failed'})
    }
};

module.exports = createIntent;
