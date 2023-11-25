const User = require("../models/User");

const addUser = async (user) => {
    const NewUser = new User(user)
    try {
        const cursor = await NewUser.save();
        return cursor;
    } catch (error) {
        throw new Error('Error adding user');
    }
};

module.exports = addUser;
