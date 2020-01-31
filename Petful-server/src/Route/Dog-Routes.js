const express = require('express');
const dogRouter = express.Router();
const dogList = require('../List-Storage/Dog-List');

dogRouter.get('/', (req, res, next) => {
  if (dogList.first === null)
    res.status(404).send('Sorry, no more dogs available');
  else {
    return res.json(dogList.first.value);
  }
});

dogRouter.delete('/:id', (req, res, next) => {
  dogList.dequeue();
  return res.status(204);
});

module.exports = dogRouter;
