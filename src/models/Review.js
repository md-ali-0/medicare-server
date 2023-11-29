const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    camp_name: { type: String, required: true },
    date: { type: String, required: true },
    participant_name: { type: String, required: true },
    participant_image: { type: String, required: true },
    feedback: { type: String, required: true },
    rating: { type: String, required: true },
    status: { type: String, required: true, default: 'pending' },
});

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;
