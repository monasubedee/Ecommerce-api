const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ProductModel = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Please provide email'],
    },
    categories:{
        type: Array
    },


},
    {
        timestamps: true
    }
)



module.exports = mongoose.model('Product', ProductModel);