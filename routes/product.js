const express = require('express');
const router = express.Router();

const { products, add, save, edit } = require('../controllers/productController');

router.get('/', products);
router.get('/products/create', create);
router.post('/products/store', save);
router.get('/products/:id/edit', edit);
router.post('/products/:id', update);
router.get('/products/:id', destroy);

module.exports = router;
