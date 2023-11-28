const Payment = require("../models/Payment")

const findAllPayments = async()=>{
    try {
        const cursor = await Payment.find()
        return cursor
    } catch (error) {
        throw new Error('error from payment')
    }
}

module.exports = findAllPayments