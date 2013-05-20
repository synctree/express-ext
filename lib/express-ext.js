exports.aroundFilter = function(callback) {
  var self = this;

  Object.keys(self.app._router.map).forEach(function(requestMethod) {
    self.app._router.map[requestMethod].forEach(function(route) {
      route.callbacks.unshift(callback);
    });
  });
};

exports.setAppHandler = function(app) {
  this.app = app;
};
