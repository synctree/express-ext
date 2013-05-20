exports.aroundFilter = function(callback) {
  Object.keys(this.app._router.map).forEach(function(requestMethod) {
    this.app._router.map[requestMethod].forEach(function(route) {
      route.callbacks.unshift(callback);
    });
  });
};

exports.setAppHandler = function(app) {
  this.app = app;
};
