const express = require('express');
const dogRouter = express.Router();
const dogList = require('../List-Storage/Dog-List');

dogRouter.get('/all-dogs', (req, res, next) => {
  res.json(dogList);
});

module.exports = dogRouter;
