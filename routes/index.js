import express from 'express';
import user from '../models/user';

const userRoute = express.Router();
userRoute.route('/users')
console.log('users')
    .get((req, res) => {
        user.find({}, (err, users) => {
            res.json(users)
        })  
    })
    userRoute.route('/:userId')
    .get((req, res) => {
        user.findById(req.params.usersId, (err, users) => {
            res.json(users)
        })  
    })