const mongoose = require("mongoose");

const campSchema = new mongoose.Schema({
    campName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    fees: {
        type: Number,
        required: true,
    },
    scheduledDateTime: {
        type: String,
        required: true,
    },
    venueLocation: {
        type: String,
        required: true,
    },
    specializedServices: {
        type: [String],
        default: [],
    },
    professionalsAttendanceCount: {
        type: Number,
        required: true,
    },
    targetAudience: {
        type: String,
        required: true,
    },
    participantCount: {
        type: Number,
        required: true,
    },
});

const Camp = mongoose.model("camp", campSchema);

module.exports = Camp;
