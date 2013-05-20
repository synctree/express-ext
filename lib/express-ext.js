_ = require('underscore');

exports.aroundFilter = function(callback) {
  Object.keys(this._router.map).forEach(function(requestMethod) {
    this._router.map[requestMethod].forEach(function(route) {
      route.callbacks.unshift(callback);
    });
  });
};

exports.setupExtensions = function(app) {
  _.extend(app, this);
};
