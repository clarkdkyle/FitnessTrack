const mongoose = require('mongoose');

const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: {
    type: Array,
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
