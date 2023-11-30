const addNewReview = require("../../lib/addNewReview");

const addReview = async(req, res)=>{
    const review = req.body;
    try {
        const createReview = await addNewReview(review)
        res.send(createReview)
    } catch (error) {
        throw new Error('addReview Error')
    }
}

module.exports = addReview