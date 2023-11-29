const Review = require('../models/Review');

const addAReview = async(review)=>{
    const newReview = new Review(review)
    try {
        const cursor = newReview.save()
        return cursor
    } catch (error) {
        throw new Error('addReview Error')
    }
}

module.exports = addAReview