/**
 * Jorge Eliécer Muñoz Herrera
 * https://github.com/jorgeemherrera
 * Users.controller.js
 * 2019
 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.users_signup_user = (req, res, next) => {
    // valid email
    User.find({email: req.body.email})
    .exec()
    .then(user =>{
        if(user.length >= 1) {
            return res.status(409).json({
                message: 'Email/User exist'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) =>{
                if(err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash,
                        name: req.body.name,
                        lastName: req.body.lastName,
                        phone: req.body.phone,
                        birthday: req.body.birthday,
                        picture: req.body.picture
                    });
                    user
                    .save()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({
                            message: 'User created',
                            createdUser: {
                                _id: result._id,
                                email: req.body.email,
                                password: hash,
                                name: req.body.name,
                                lastName: req.body.lastName,
                                phone: req.body.phone,
                                birthday: req.body.birthday,
                                picture: req.body.picture,
                                request: {
                                    type: 'POST',
                                    url: `http://localhost:3000/users/${result._id}`
                                }
                            },
                        })
                    })
                    .catch( err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    }); 
                }
            }) 
        }
    })
}

exports.users_login_user = (req,res,next) =>{
    User.find({ email: req.body.email})
    .exec()
    .then(user => {
        if(user.length < 1) {
            return res.status(401).json({
                message: 'Auth failed'
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) =>{
            if(err) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            } if(result) {
                const token = jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                },
                process.env.JWT_KEY,
                {
                    expiresIn: '1h'
                }
                );
                return res.status(200).json({
                    message: 'Auth successful',
                    token: token
                });
            }
        })
    })
    .catch( err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }); 
}

exports.users_delete_user = (req, res, next) => {
    User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'User deleted'
        });
    })
    .catch( err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }); 
}

