const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created : {
        type: Date,
        default: Date.now()
    },
    updated : {
        type: Date,
        default: Date.now()
    },
    image: {
        type: String
    }
});

_schema.pre('save', function (next) {
    this.updated = Date.now();
    next();
});

module.exports = mongoose.model('product', _schema);