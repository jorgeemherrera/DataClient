/**
 * Jorge Eliécer Muñoz Herrera
 * https://github.com/jorgeemherrera
 * Orders.js
 * 2019
 */
const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

const OrdersController =require('../controllers/orders.controller');

/**
 * Handle incoming GET request to /orders
 */
router.get('/', checkAuth, OrdersController.orders_get_all );

/**
 * Handle incoming POST request to /orders
 */
router.post('/', checkAuth, checkAuth, OrdersController.orders_create_order);

/**
 * Handle incoming GET ID request to /orders
 */
router.get('/:orderId', checkAuth, OrdersController.orders_get_order );

/**
 * Handle incoming DELETE request to /orders
 */
router.delete('/:orderId', checkAuth, OrdersController.orders_delete_order);

module.exports = router;