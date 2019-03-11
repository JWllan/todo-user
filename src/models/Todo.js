const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

TodoSchema.plugin(mongoosePaginate);
mongoose.model('Todo', TodoSchema);