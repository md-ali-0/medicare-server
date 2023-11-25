const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    'name': { type: String, required: true },
    'email': { type: String, required: true, unique: true },
    'role': {
        type: String,
        required: true,
        enum: ["organizer", "healthcare_professional", "participant"],
        default: "participant",
    },
    'createdAt': { type: Date },
    'lastSignInTime': { type: Date },
});

const User =model('user', UserSchema)

module.exports = User