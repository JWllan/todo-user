const mongoose = require('mongoose');

const Table = mongoose.model('User');

module.exports = {
    async login(req, res) {
        const { login, senha } = req.body;
        const element = await Table.findOne({"nickname": login, "password": senha});
        return res.json(element);
    }
}