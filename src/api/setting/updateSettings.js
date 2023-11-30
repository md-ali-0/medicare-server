const editSettings = require('../../lib/editSettings');
const updateSettings = async (req, res) => {
    const updatedSettingData = req.body;
    try {
        const result = await editSettings(updatedSettingData);
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: false, InsertedId: null })
    }
};

module.exports = updateSettings;
