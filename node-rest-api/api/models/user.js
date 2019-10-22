const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      },
    password: {type: String, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: Number, required: true},
    birthday: {type: Date, default: Date.now, required: false},
    picture: {type: String, required: false},
});

module.exports = mongoose.model('User', userSchema);