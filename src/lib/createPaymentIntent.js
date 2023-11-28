const stripe = require("stripe")(process.env.STRIPE_SECRET);

const createPaymentIntent = async (amount) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_types: ["card"],
        });
        return paymentIntent
    } catch (error) {
        throw new Error("Create Payment Intent Error");
    }
};

module.exports = createPaymentIntent;
