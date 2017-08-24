const curry = require('lodash/curry');
const log = console.log;

const add = curry((x, y) => x + y);

const increment = add(1);
const addTen = add(10);

log(increment(2));
// 3

log(addTen(2));
// 12

log(add(10, 30));
