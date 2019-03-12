const mongoose = require('mongoose');

const Table = mongoose.model('User');

module.exports = {
    async list(req, res) {
        const { page = 1 } = req.query;
        const list = await Table.paginate({  }, { page, limit: 10 });
        return res.json(list);
    },
    async get(req, res) {
        const element = await Table.findById(req.params.id);
        return res.json(element);
    },
    async post(req, res) {
        const existe = await Table.findOne({"nickname": req.body.nickname});
        if (existe == null) {
            const element = await Table.create(req.body);
            return res.json(element);
        }
        else {
            return res.json(null);
        }
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