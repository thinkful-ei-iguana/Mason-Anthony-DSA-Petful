const Queue = require('../Queue');

let peopleList = new Queue();

peopleList.enqueue({
  id: 1,
  name: 'Anthony Bostic',
  age: '22'
});
peopleList.enqueue({
  id: 2,
  name: 'Mason Reichbauer',
  age: '31'
});
peopleList.enqueue({
  id: 3,
  name: 'Nancy Williams',
  age: '40'
});
peopleList.enqueue({
  id: 4,
  name: 'John Doe',
  age: '30'
});

module.exports = peopleList;
