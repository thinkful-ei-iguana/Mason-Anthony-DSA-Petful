const express = require('express');
const catRouter = express.Router();
const catList = require('../List-Storage/Cat-List');

catRouter.get('/all-cats', (req, res, next) => {
  res.json(catList);
});

catRouter;

module.exports = catRouter;
