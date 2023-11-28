const mongoose = require('mongoose');

const newAttendedCampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  fee: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  campName: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  scheduledDate: {
    type: Date,
    required: true
  },
  scheduledTime: {
    type: String,
    required: true
  },
  venueLocation: {
    type: String,
    required: true
  },
  attendedStatus: {
    type: String,
    enum: ['pending', 'confirmed', 'rejected'],
    default: 'pending'
  },
  createdBy: {
    type: String,
    required: true,
  },
});

const AttendedCamp = mongoose.model('attendedCamp', newAttendedCampSchema);

module.exports = AttendedCamp;