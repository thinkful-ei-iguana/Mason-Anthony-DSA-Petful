const express = require('express');
const catRouter = express.Router();
const catList = require('../List-Storage/Cat-List');

catRouter.get('/', (req, res, next) => {
  if (catList.first === null)
    res.status(404).send('Sorry, no more cats available');
  else {
    return res.json(catList.first.value);
  }
});

catRouter.delete('/remove', (req, res, next) => {
  catList.dequeue();
  return res.status(204).json(catList.first);
});

module.exports = catRouter;
