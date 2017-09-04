const _ = require('ramda');

var IO = function(f) {
  this.__value = f;
};

IO.of = function(x) {
  return new IO(function() {
    return x;
  });
};

IO.prototype.map = function(f) {
  return new IO(_.compose(f, this.__value));
};

var io_window = new IO(function() {
  return window;
});

io_window.map(function(win) {
  return win.innerWidth;
});
// IO(1430)

io_window
  .map(_.prop('location'))
  .map(_.prop('href'))
  .map(_.split('/'));
// IO(["http:", "", "localhost:8000", "blog", "posts"])

//  $ :: String -> IO [DOM]
var $ = function(selector) {
  return new IO(function() {
    return document.querySelectorAll(selector);
  });
};

$('#myDiv')
  .map(_.head)
  .map(function(div) {
    return div.innerHTML;
  });
// IO('I am some inner html')
