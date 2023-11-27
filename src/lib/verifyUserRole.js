const User = require("../models/User");

const verifyUserRole = async (email) => {
    const query = {
        email: email
    }
    try {
        const user = await User.findOne(query);
        return user.role;
    } catch (error) {
        throw new Error('Error adding user');
    }
};

module.exports = verifyUserRole;