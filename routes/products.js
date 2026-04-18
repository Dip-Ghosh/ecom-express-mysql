const express = require("express");
const {getProducts, saveProduct, deleteProduct, updateProduct} = require('../controllers/productController');

const router = express.Router();

// const checkContentType = (req, res, next) => {
//     if (req.headers['content-type'] !== 'application/json') {
//         res.send("invalid request!");
//     }
//     next();
// }
//
// const bodyParser = () => {
//
// }

// router.use(checkContentType);

//product
router.get('/products', getProducts);
router.post('/products', saveProduct);
router.delete('/products/:id', deleteProduct);
router.put('/products/:id', updateProduct);

module.exports = router;