const findSettings = require("../../lib/findSettings");

const getSettings = async (req, res) => {
    const result = await findSettings();
    res.send(result);
};

module.exports = getSettings;
