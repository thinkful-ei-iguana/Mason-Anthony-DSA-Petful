const express = require('express');
const peopleRouter = express.Router();
const peopleList = require('../List-Storage/People-List');

peopleRouter.get('/', (req, res, next) => {
  return res.json(peopleList);
});

peopleRouter.delete('/', (req, res, next) => {
  peopleList.dequeue();
  return res.status(204).json(peopleList.first);
});

module.exports = peopleRouter;
