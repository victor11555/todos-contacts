const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const User = require('../models/user');

const saltRounds = 12;

router.get('/logout', async (req, res, next) => {

});

router.post('/login', async (req, res, next) => {
  const {
    email, password,
  } = req.body;
  let user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({ success: true, user });
  }
  if (user) {
    res.json({ success: false, message: 'wrong password' });
  } else {
    res.json({ success: false, message: 'no such user' });
  }
});

router.post('/signup', async (req, res, next) => {
  const {
    username, email, password,
  } = req.body;
    if (await User.findOne({ username })) {
      // already have such user
      res.json({ success: false, message: 'have such user' });
    }
    let user = await new User({
      username,
      email,
      password: await bcrypt.hash(password, saltRounds),
      contacts: [],
      todos: [],
    });
  await user.save();
  res.json({ success: true, user }).status(200);
});

module.exports = router;
