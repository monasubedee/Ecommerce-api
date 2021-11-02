const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ProductModel = new Schema({
    title: {
        type: String,
        required: [true, 'Please provide name'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Please provide description'],
    },
    image:{
        type:String,
        require:[true,'Please privide image']
    },
    categories:{
        type: Array
    },
    color:{
        type:String
    },
    size:{
        type:String
    },
    price:{
        type:Number
    }

},
    {
        timestamps: true
    }
)



module.exports = mongoose.model('Product', ProductModel);