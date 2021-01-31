const express = require('express');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const router = express.Router();

const User = require('../models/user');

const saltRounds = 12;

function makeToken(user){
  let payload = {
    "id": user.id,
    email: user.email,
    name: user.name,
    telephone: user.telephone,
    contacts: user.contacts,
    todos: user.todos,
  }
  const tokenKey = '1a2b-3c4d-5e6f-7g8h';
  let head = Buffer.from(JSON.stringify({alg: 'HS256', typ: 'jwt'})).toString('base64');
  let body = Buffer.from(JSON.stringify(payload)).toString('base64');
  let signature = crypto.createHmac('SHA256', tokenKey).update(`${head}.${body}`).digest('base64');
  return `${head}.${body}.${signature}`
}

router.post('/login', async (req, res, next) => {
  const {
    email, password,
  } = req.body;
  let user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    let token = makeToken(user);
    res.json({ success: true, user, token });
  }
  if (user) {
    res.json({ success: false, message: 'wrong password' });
  } else {
    res.json({ success: false, message: 'no such user' });
  }
});

router.post('/signup', async (req, res, next) => {
  const {
    name, email, password, telephone,
  } = req.body;
    if (await User.findOne({ email })) {
      res.json({ success: false, message: 'have such user' });
    }
    let user = await new User({
      name,
      email,
      password: await bcrypt.hash(password, saltRounds),
      telephone,
      contacts: [],
      todos: [],
    });
  await user.save();
  let token = makeToken(user);
  res.json({ success: true, user, token }).status(200);
});

router.get('/logout', async (req, res, next) => {

});

module.exports = router;
