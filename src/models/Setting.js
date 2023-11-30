const { model, Schema } = require("mongoose");

const SettingsSchema = new Schema({
    siteName: { type: String, required: true, default:'Medical Camp Website'},
    siteLogo: { type: String, required: true, default: "https://placehold.co/350x80" },
});

const Settings = model("setting", SettingsSchema);

module.exports = Settings;
