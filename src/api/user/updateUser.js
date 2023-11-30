const modifyUser = require('./modifyUser');
const updateUser = async (req, res) => {
    const id = req.params.userId
    const updatedUser = req.body;
    try {
        const result = await modifyUser(id, updatedUser);
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: false, InsertedId: null })
    }
};

module.exports = updateUser;
