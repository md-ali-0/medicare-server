const User = require("../../models/User");
const modifyUser = async (id, updatedUser) => {
    try {
        const result = await User.findByIdAndUpdate({ _id: id }, { $set: updatedUser }, { new: true });
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: false, InsertedId: null });
    }
};

module.exports = modifyUser;
