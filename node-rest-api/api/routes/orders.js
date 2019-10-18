/**
 * Jorge Eliécer Muñoz Herrera
 * https://github.com/jorgeemherrera
 * Orders.js
 * 2019
 */
const express = require('express');
const router = express.Router();

/**
 * Handle incoming GET request to /orders
 */
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

/**
 * Handle incoming POST request to /orders
 */
router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity,
    }
    res.status(201).json({
        message: 'Orders were created',
        order: order
    });
});

/**
 * Handle incoming GET ID request to /orders
 */
router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders details',
        orderId: req.params.orderId
    });
});

/**
 * Handle incoming DELETE request to /orders
 */
router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;