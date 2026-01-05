/**
 * Jorge Eliécer Muñoz Herrera
 * https://github.com/jorgeemherrera
 * Users.js
 * 2019
 */
const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const RateLimit = require('express-rate-limit');

const signupLimiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 20 signup requests per `window` (here, per 15 minutes)
});

const getUsersLimiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 get-all-users requests per window
});

const loginLimiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 login requests per window
});

const deleteUserLimiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 delete-user requests per window
});

const UsersController =require('../controllers/users.controller');

router.post('/signup', signupLimiter, UsersController.users_signup_user);

router.get('/', getUsersLimiter, UsersController.users_get_all);

router.post('/login', loginLimiter, UsersController.users_login_user);

router.delete('/:userId', checkAuth, deleteUserLimiter, UsersController.users_delete_user)

module.exports = router;