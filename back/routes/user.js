const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const tokenKey = '1a2b-3c4d-5e6f-7g8h';

const User = require('../models/user');
const Todo = require('../models/todo');

router.post('/', async (req, res, next) => {
    const {token} = req.body;
    let data = jwt.verify(token, tokenKey, (err, decoded)=> {
        if(err)  res.json({success: false, message: 'token expired'});
        return decoded
    })
    const {id} = data;
    let user = await User.findOne({_id:id});
    let users = await User.find().filter((el)=>!user.contacts.includes(el._id)).limit(10);
    console.log(users)
    if (users) {
        res.json({success: true, users});
    } else {
        res.json({success: false, message: 'no users which are not in your contacts'});
    }
});

router.post('/addcontact', async (req, res, next) => {
    const {token} = req.body;
    let data = jwt.verify(token, tokenKey, (err, decoded)=> {
        if(err)  res.json({success: false, message: 'token expired'});
        return decoded
    })
    const {id} = data;
    let user = await User.findOne({_id:id}).populate('todos contacts');;
    const {contactId} = req.body;
    user.contacts.push(contactId);
    await user.save();
    res.json({success: true, contact: contactId})
});

module.exports = router;
