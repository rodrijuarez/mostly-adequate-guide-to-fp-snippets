var Container = function(x) {
  this.__value = x;
};

Container.of = function(x) {
  return new Container(x);
};

const container = Container.of(3);
