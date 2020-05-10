const router = require('express').Router();

const db = require('../models/model.js');

router.post('/api/workouts', ({ body }, res) => {
  db.create(body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get('/api/workouts', (req, res) => {
  db.find({})
    .sort({ date: -1 })
    .then((result) => {
      result.forEach((workout) => {
        let total = 0;
        workout.exercises.forEach((exercise) => {
          total += exercise.duration;
        });
        workout.totalDuration = total;
      });
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
  db.updateOne({ _id: req.params.id }, {
    $push: {
      exercises: req.body,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
  db.find({})
    .sort({ date: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
