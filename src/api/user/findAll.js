const findAllUsers = require('../../lib/findAllUsers');

const findAll = async (req, res) => {
    const filter = req.query;
    const allUsers = await findAllUsers(filter);
    res.send(allUsers);
};

module.exports =  findAll;