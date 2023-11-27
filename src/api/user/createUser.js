const addUser = require('../../lib/addUser')
const createUser = async (req, res) => {
    const user = req.body;

    try {
        const result = await addUser(user);
        res.send(result);
    } catch (error) {
        return res.send({ acknowledged: true, InsertedId: null })
    }
};

module.exports = createUser;
