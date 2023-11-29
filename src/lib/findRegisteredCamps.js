const RegisteredCamp = require("../models/RegisteredCamp");

const findPopularCamps = async (filter) => {

    let query =  {}
    if (filter.createdBy) {
        query.createdBy = filter.createdBy
    }
    if (filter.email) {
        query.email = filter.email
    }
    if (filter.paymentStatus) {
        query.paymentStatus = filter.paymentStatus
    }
    if (filter.confirmationStatus) {
        query.confirmationStatus = filter.confirmationStatus
    }
    const cursor = await RegisteredCamp.find(query).sort();
    return cursor;
};

module.exports = findPopularCamps;
