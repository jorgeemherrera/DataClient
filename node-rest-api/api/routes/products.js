/**
 * Jorge Eliécer Muñoz Herrera
 * https://github.com/jorgeemherrera
 * Products.js
 * 2019
 */
const express = require('express');
const router = express.Router();
const multer = require('multer');

const checkAuth = require('../middleware/check-auth');

const ProductsController =require('../controllers/products.controller');

const RateLimit = require('express-rate-limit');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-')  + file.originalname);
    }
});

const fileFilter = (req, file,cb) => {
    // Reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype  === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
    fileSize: 1024 * 1024 * 5 
    },
    fileFilter: fileFilter
});

const Product = require('../models/product');

const productsGetAllLimiter = RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs for this endpoint
});

const productsGetByIdLimiter = RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 get-by-id requests per windowMs for this endpoint
});

const productsUpdateLimiter = RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 update requests per windowMs for this endpoint
});

const productsDeleteLimiter = RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 delete requests per windowMs for this endpoint
});

const productsCreateLimiter = RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 create requests per windowMs for this endpoint
});

/**
 * the rest of the route is on app.js
 */
router.get('/', productsGetAllLimiter, ProductsController.products_get_all);

router.post('/', productsCreateLimiter, checkAuth, upload.single('productImage'), ProductsController.products_create_product);

router.get('/:productId', productsGetByIdLimiter, ProductsController.products_get_product);

router.patch('/:productId', productsUpdateLimiter, checkAuth, ProductsController.products_update_product);

router.delete('/:productId', productsDeleteLimiter, checkAuth, ProductsController.products_delete_product);

module.exports = router;