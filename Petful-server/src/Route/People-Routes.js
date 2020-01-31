const express = require('express');
const peopleRouter = express.Router();
const peopleList = require('../List-Storage/People-List');

peopleRouter.get('/all-people', (req, res, next) => {
  return res.json(peopleList);
});

module.exports = peopleRouter;
