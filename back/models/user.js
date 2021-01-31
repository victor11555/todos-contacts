const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  telephone: { type: String, required: true },
  contacts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }],
  todos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'todo',
  }],
});

module.exports = mongoose.model('User', userSchema);
