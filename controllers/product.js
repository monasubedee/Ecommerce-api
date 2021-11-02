const Product = require('../models/product');



const createProduct = async (req, res) => {

    const { title, description, image, categories, color, size, price } = req.body;
    try {
        const existingProduct = await Product.findOne({ title }).exec();

        if (existingProduct) {
            return res.status(409).json('Product name already exists');
        }
        const newProduct = await Product.create({ title, description, image, categories, color, size, price });

        res.status(201).json(newProduct);

    } catch (error) {
        res.status(500).json(error);
    }
}


const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json(error);
    }
}


const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);

        res.status(200).json('Deleted Product Successfully');

    } catch (error) {
        res.status(500).json(error);
    }
}

const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({ _id: id });

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json(error);
    }
}


const getAllProducts = async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        }
        else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory]
                }
            });
            
        }
        else {
            products = await Product.find();
        }
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts };