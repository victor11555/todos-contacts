const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../models/user');

const saltRounds = 12;
const tokenKey = '1a2b-3c4d-5e6f-7g8h';

router.get('/', async (req, res) => {
  const { token } = req.body;
  let data = jwt.verify(token, tokenKey)
  console.log(data)
})

router.post('/login', async (req, res, next) => {
  const {
    email, password,
  } = req.body;
  let user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    let token = await jwt.sign({id: user._id}, tokenKey, { expiresIn: 60 * 24 } );
    res.json({ success: true, token });
  }
  if (user) {
    res.json({ success: false, message: 'wrong password' });
  } else {
    res.json({ success: false, message: 'no such user' });
  }
});

router.post('/signup', async (req, res, next) => {
  const {
    name, email, password, phone,
  } = req.body;
    if (await User.findOne({ email })) {
      res.json({ success: false, message: 'have such user' });
    }
    let user = await new User({
      name,
      email,
      password: await bcrypt.hash(password, saltRounds),
      phone,
      contacts: [],
      todos: [],
    });
  await user.save();
  let token = jwt.sign({id: user.id}, tokenKey, { expiresIn: 60 * 24 });
  res.json({ success: true, token }).status(200);
});

router.get('/logout', async (req, res, next) => {

});

module.exports = router;
