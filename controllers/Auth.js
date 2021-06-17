'use strict';

var url = require('url');


var Auth = require('./AuthService');


module.exports.changePassword = function changePassword (req, res, next) {
  Auth.changePassword(req.swagger.params, res, next);
};

module.exports.login = function login (req, res, next) {
  Auth.login(req.swagger.params, res, next);
};

module.exports.logout = function logout (req, res, next) {
  Auth.logout(req.swagger.params, res, next);
};

module.exports.recoverPassword = function recoverPassword (req, res, next) {
  Auth.recoverPassword(req.swagger.params, res, next);
};

module.exports.resetPassword = function resetPassword (req, res, next) {
  Auth.resetPassword(req.swagger.params, res, next);
};
