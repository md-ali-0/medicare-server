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
        default:0
    },
    scheduledDate: {
        type: String,
        required: true,
    },
    scheduledTime: {
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
        default: 0
    },
    targetAudience: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'pending'
    },
    participantCount: {
        type: Number,
        required: true,
        default: 0
    },
    createdBy:{
        type: String,
        required: true,
    }
});

const UpComingCamp = mongoose.model("upComingCamp", campSchema);

module.exports = UpComingCamp;