const peopleList = [
  {
    name: 'Anthony Bostic',
    age: '22'
  },
  {
    name: 'Mason Reichbauer',
    age: '31'
  },
  {
    name: 'Nancy Williams',
    age: '40'
  },
  {
    name: 'John Doe',
    age: '30'
  }
];

const express = require('express');
const peopleRouter = express.Router();

peopleRouter.get('/new-person', (req, res, next) => {
  return res.json([peopleList]);
});
