const Products = require('../models/product');
const {products} = require("../routes/newProduct");

const getProducts = async (req, res) => {
    try {
        const result = await Products.fetchData();
        const rows = result[0] || result || [];

        res.render(
            'products',
            {
                products:  rows,
                selectedPage:'store',
                isProduct:rows.length>0
            }
        );
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