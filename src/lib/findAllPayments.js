const Payment = require("../models/Payment")

const findAllPayments = async(filter)=>{
    let query={}
    if (filter.email) {
        query.email = filter.email
    }
    try {
        const cursor = await Payment.find(query)
        return cursor
    } catch (error) {
        throw new Error('error from payment')
    }
}

module.exports = findAllPayments