const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Want to Play', 'Playing', 'Completed', 'Dropped'],
    default: 'Want to Play',
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: null,
  },
  notes: {
    type: String,
    default: '',
  },
}, { timestamps: true });

module.exports = mongoose.model('Game', gameSchema);