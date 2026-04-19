const express = require("express");
const {getProducts, saveProduct, deleteProduct, updateProduct} = require('../controllers/productController');

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', saveProduct);
router.delete('/products/:id', deleteProduct);
router.put('/products/:id', updateProduct);

module.exports = router;