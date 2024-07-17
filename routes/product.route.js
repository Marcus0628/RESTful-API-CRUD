const express = require('express');

const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller.js');

//get all product
router.get('/', getProducts);

//get product with ID
router.get('/:id', getProduct);

//create a product
router.post('/', createProduct);

//update a product
router.put('/:id', updateProduct);

//delete a product
router.delete('/:id', deleteProduct);

module.exports = router;
