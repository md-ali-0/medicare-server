const findAcceptedCamp = require("../../lib/findAcceptedCamp")

const findAccepted = async(req,res)=>{
    const filter = req.query
    try {
        const result = await findAcceptedCamp(filter);
        res.send(result)
    } catch (error) {
        throw new Error('error find accepted')
    }
}

module.exports = findAccepted