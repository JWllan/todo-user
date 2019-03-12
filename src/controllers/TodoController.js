const mongoose = require('mongoose');

const Table = mongoose.model('Todo');

module.exports = {
    async list(req, res) {
        const { page = 0, userId } = req.query;
        const list = (page != 0) ? await Table.paginate({ userId }, { page, limit: 10 }) : await Table.find();
        return res.json(list);
    },
    async get(req, res) {
        const element = await Table.findById(req.params.id);
        return res.json(element);
    },
    async post(req, res) {
        const element = await Table.create(req.body);
        return res.json(element);
    },
    async put(req, res) {
        const element = await Table.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(element);
    },
    async delete(req, res) {
        await Table.findByIdAndRemove(req.params.id);
        return res.send();
    }
}