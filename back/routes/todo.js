const express = require('express');
const jwt = require('jsonwebtoken')

const tokenKey = '1a2b-3c4d-5e6f-7g8h';
const router = express.Router();

const User = require('../models/user');
const Todo = require('../models/todo');

router.post('/done', async (req, res, next) => {
    const {token} = req.body;
    let data = jwt.verify(token, tokenKey, (err, decoded)=> {
        if(err)  res.json({success: false, message: 'token expired'});
        return decoded
    })
    const {id} = data;
    let user = await User.findOne({_id:id}).populate('todos contacts');;
    const {todoId} = req.body;
    user.todos.map(el=>{
        if(el._id == todoId) {
            el.done = !el.done;
        }
        return
    })
    user.todos.push(todo._id);
    await user.save();
    res.json({success: true, todo})
});

router.post('/addtodo', async (req, res, next) => {
    const {token} = req.body;
    let data = jwt.verify(token, tokenKey, (err, decoded)=> {
        if(err)  res.json({success: false, message: 'token expired'});
        return decoded
    })
    const {id} = data;
    let user = await User.findOne({_id:id}).populate('todos contacts');;
    const {contactId, body} = req.body;
    let todo;
    if(contactId) {
        todo = new Todo({
            body,
            contact: contactId,
        })
    } else {
        todo = new Todo({
            body,
        })
    }
    await todo.save();
    user.todos.push(todo._id);
    await user.save();
    res.json({success: true, todo})
});

module.exports = router;
