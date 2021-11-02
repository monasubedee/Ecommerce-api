const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const CartModel = new Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    products:[
        {
            productId:{
                type:mongoose.Types.ObjectId,
                ref:'Product'
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ]

},
    {
        timestamps: true
    }
)



module.exports = mongoose.model('Cart', CartModel);