const Cart = require("../models/cart");

//create a cart

const createCart = async (req, res) => {
    try {
        const newCart = await Cart.create(req.body);

        res.status(201).json(newCart);

    } catch (error) {
        res.status(500).json(error);
    }
}


//update cart
const updateCart = async (req, res) => {
    
    const { id } = req.params;
    try {
        const updatedCart = await Cart.findByIdAndUpdate(id, {
            $set: req.body
        });
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error);
    }
}


//delete cart
const deleteCart = async (req, res) => {
    const { id } = req.params;
    try {
        await Cart.findByIdAndDelete(id);
        res.status(200).json('Deleted cart successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}


//get user cart
const getUserCart = async (req, res) => {
    console.log(req.user);
    const { id } = req.params;
    try {
       const cart = await Cart.findOne({userId:id}).exec();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
}


//get all user carts
const getAllUserCarts = async (req, res) => {
    try {
       const carts = await Cart.find().exec();
        res.status(201).json(carts);
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = { createCart, updateCart, deleteCart, getUserCart, getAllUserCarts }