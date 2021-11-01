const User = require('../models/user');



const signupUser = async (req, res) => {
    const { name, email, password, isAdmin } = req.body;
    try {
        const existingUser = await User.findOne({ name, email }).exec();

        if (existingUser) {
            return res.status(409).json('User Already Exists');
        }
        const user = await User.create({ name, email, password, isAdmin });

        const token = user.createJWT();

        res.status(201).json({ token, user })


    } catch (error) {
        res.status(500).json(error);
    }
}


const signinUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email }).exec();

        if (existingUser) {

            const matched = await existingUser.comparePasswords(password);

            if (matched) {

                const token = existingUser.createJWT();
                res.status(200).json({ token })
            }
            else{
                return res.status(400).json('Passwords does not match')
            }
        }
        else {
            return res.status(401).json('User does not exist');
        }

    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = { signupUser, signinUser };