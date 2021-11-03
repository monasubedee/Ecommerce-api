const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const OrderModel = new Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    address:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        default:'pending'
    },
    amount:{
        type:Number,
        required:true
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
    ],
 

},
    {
        timestamps: true
    }
)



module.exports = mongoose.model('Order', OrderModel);