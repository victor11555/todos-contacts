const express = require('express');

const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res, next) => {
    const {token} = req.body;
    let data = jwt.verify(token, tokenKey, (err, decoded)=> {
        if(err)  res.json({success: false, message: 'token expired'});
        return decoded
    })
    const {id} = data;
    let user = await User.findOne({_id:id});
    let users = await User.find().filter((el)=>!user.contacts.includes(el._id)).limit(10)
    console.log(users)
    if (users) {
        res.json({success: true, users});
    } else {
        res.json({success: false, message: 'no users which are not in your contacts'});
    }
});

module.exports = router;
