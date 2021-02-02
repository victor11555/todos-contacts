const express = require('express');

const router = express.Router();

const Todo = require('../models/todo');

router.get('/', async (req, res, next) => {

});

router.post('/addtodo', async (req, res, next) => {
    const {token} = req.body;
    let data = jwt.verify(token, tokenKey, (err, decoded)=> {
        if(err)  res.json({success: false, message: 'token expired'});
        return decoded
    })
    const {id} = data;
    let user = await User.findOne({_id:id});
    const {contactId, body} = req.body;
    const todo = new Todo({
        body,
        contact: contactId,
    })
    await todo.save();
    user.todos.push(todo._id);
    await user.save();
    res.json({success: true, user})
});

module.exports = router;
