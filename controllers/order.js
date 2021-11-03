const Order = require('../models/order');


const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);

        res.status(201).json(newOrder);

    } catch (error) {
        res.status(500).json(error);
    }
}



const updateOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedOrder = await Order.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true});

        res.status(200).json(updatedOrder);

    } catch (error) {
        res.status(500).json(error);
    }
}


const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
       await Order.findByIdAndDelete(id);

        res.status(200).json('Order Deleted Successfully');

    } catch (error) {
        res.status(500).json(error);
    }
}


const getUserOrders = async (req, res) => {
    const { id } = req.params;
    try {
        const orders = await Order.find({userId: id});

        res.status(200).json(orders);

    } catch (error) {
        res.status(500).json(error);
    }
}


const getAllUserOrders = async (req, res) => {
   
    try {
        const orders = await Order.find();

        res.status(200).json(orders);

    } catch (error) {
        res.status(500).json(error);
    }
}



module.exports = { createOrder, updateOrder, deleteOrder, getUserOrders, getAllUserOrders };