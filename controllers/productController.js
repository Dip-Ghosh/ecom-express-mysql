const Products = require('../models/product');

const getProducts = async (req, res) => {
    try {
        const [rows] = await Products.fetchData();
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const saveProduct = async (req, res) => {
    try {
        const {name, price} = req.body;
        const [result] = await Products.save(name, price);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const [result] = await Products.delete(id);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const {price} = req.body;

        const [result] = await Products.update(id, price);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getProducts,
    saveProduct,
    deleteProduct,
    updateProduct
};