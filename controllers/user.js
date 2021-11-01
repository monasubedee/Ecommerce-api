const User = require('../models/user');
const bcrypt = require('bcryptjs');


const updateUser = async (req, res) => {
    const { id } = req.params;
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        req.body.password = hashedPassword;
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id,
            {
                $set: req.body
            },
            { new: true });

        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json(error);
    }
}


const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await User.findByIdAndDelete(id);

        res.status(200).json('The use has been deleted successfully');

    } catch (error) {
        res.status(500).json(error);
    }
}


const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id).exec();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}


const getAllUsers = async (req, res) => {

    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find().exec();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
}





module.exports = { updateUser, deleteUser, getUser, getAllUsers }