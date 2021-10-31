const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const Schema = mongoose.Schema;


const UserModel = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password']
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

},
    {
        timestamps: true
    }
)

UserModel.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(this.password, salt);

    this.password = hashedPassword;
})

UserModel.methods.createJWT = function () {
    return jwt.sign({ userId: this._id, isAdmin: this.isAdmin }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

UserModel.methods.comparePasswords = async function (newPassword) {
    const matched = await bcrypt.compare(newPassword, this.password);
    return matched;
}


module.exports = mongoose.model('User', UserModel);