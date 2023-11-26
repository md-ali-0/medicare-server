const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    camp_name: String,
    date: String,
    participant_name: String,
    participant_image: String,
    feedback: String,
    rating: Number
});

const review = mongoose.model('review', reviewSchema);

module.exports = review;