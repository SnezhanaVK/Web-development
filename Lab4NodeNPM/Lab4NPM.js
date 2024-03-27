
const _ = require('lodash');
const users = [
  { пользователь: 'fred', возраст: 48 },
  { пользователь: 'barney', возраст: 36 },
  { пользователь: 'fred', возраст: 40 },
  { пользователь: 'barney', возраст: 34 }
];

const sortedUsers = _.sortBy(users, 'возраст');
console.log(sortedUsers);