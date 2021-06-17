'use strict';

var url = require('url');


var Auth = require('../service/AuthService');


module.exports.changePassword = function changePassword (req, res, next) {
  var email = req.swagger.params['email'].value;
  var oldPassword = req.swagger.params['oldPassword'].value;
  var newPassword = req.swagger.params['newPassword'].value;
  Auth.changePassword(email,oldPassword,newPassword)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.login = function login (req, res, next) {
  var email = req.swagger.params['email'].value;
  var password = req.swagger.params['password'].value;
  Auth.login(email,password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logout = function logout (req, res, next) {
  Auth.logout()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.recoverPassword = function recoverPassword (req, res, next) {
  var email = req.swagger.params['email'].value;
  Auth.recoverPassword(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resetPassword = function resetPassword (req, res, next) {
  var token = req.swagger.params['token'].value;
  var newPassword = req.swagger.params['newPassword'].value;
  Auth.resetPassword(token,newPassword)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
