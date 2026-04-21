const express = require('express');
const router = express.Router();
const { products, addProduct, editProduct } = require('../controllers/productController');

router.get('/', products);
router.get('/products/create', addProduct);
router.get('/products/:id/edit', editProduct);

module.exports = router;
