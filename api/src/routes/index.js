const {Router}  = require('express')

const express = require("express");
const routes = Router();
routes.use(express.json());
const productController = require('../controllers/ProductsControllers')


routes.get('/products', productController.getAllProducts);
routes.get('/products/:id', productController.getProductById);
routes.post('/products', productController.createProduct);
routes.put('/products/:id', productController.updateProduct);
routes.get('/products/:name', productController.getProductsByName);
routes.delete('/products/:id', productController.deleteProductById);



module.exports = routes;
