/**
 * Jorge Eliécer Muñoz Herrera
 * https://github.com/jorgeemherrera
 * Users.js
 * 2019
 */
const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const UsersController =require('../controllers/users.controller');

router.post('/signup', UsersController.users_signup_user);

router.post('/login', UsersController.users_login_user);

router.delete('/:userId', checkAuth, UsersController.users_delete_user)

module.exports = router;