exports.aroundFilter = function(callback) {
  Object.keys(app._router.map).forEach(function(requestMethod) {
    app._router.map[requestMethod].forEach(function(route) {
      route.callbacks.unshift(callback);
    });
  });
};

exports.setAppHandler = function(app) {
  this.app = app;
};
