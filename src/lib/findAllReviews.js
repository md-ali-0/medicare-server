const Review = require("../models/Review");

const findAllReviews = async (filter) => {
    const cursor = await Review.find();
    return cursor;
};

module.exports = findAllReviews;
