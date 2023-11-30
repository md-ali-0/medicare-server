const AttendedCamp = require("../models/AttendedCamp")

const findAcceptedCamp = async(filter)=>{
    let query = {}
    if (filter.email) {
        query.email = filter.email
    }
    if (filter.createdBy) {
        query.createdBy = filter.createdBy
    }
    try {
        const cursor = await AttendedCamp.find(query)
        return cursor
    } catch (error) {
        throw new Error('error from find accepted camp')
    }
}

module.exports = findAcceptedCamp