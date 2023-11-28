const Payment = require("../models/Payment")

const createPayment = async(payment)=>{
    const newPayment = new Payment(payment)
    try {
        const cursor = await newPayment.save()
        return cursor
    } catch (error) {
        
    }
}

module.exports = createPayment