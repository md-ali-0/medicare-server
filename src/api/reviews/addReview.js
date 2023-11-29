const addAReview = require("../../lib/addaReview");

const addReview = async(req, res)=>{
    const review = req.body;
    try {
        const createReview = await addAReview(review)
        res.send(createReview)
    } catch (error) {
        throw new Error('addReview Error')
    }
}

module.exports = addReview