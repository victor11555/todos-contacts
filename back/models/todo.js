const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  body: { type: String, required: true },
  done: {type: String, default: true},
  contact: {type: mongoose.Schema.Types.ObjectId,
    ref: 'user',},
});

module.exports = mongoose.model('Todo', todoSchema);
