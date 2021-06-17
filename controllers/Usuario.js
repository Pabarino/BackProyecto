'use strict';

var url = require('url');


var Usuario = require('./UsuarioService');


module.exports.createUser = function createUser (req, res, next) {
  Usuario.createUser(req.swagger.params, res, next);
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  Usuario.deleteUser(req.swagger.params, res, next);
};

module.exports.getAllUsers = function getAllUsers (req, res, next) {
  Usuario.getAllUsers(req.swagger.params, res, next);
};

module.exports.getUserById = function getUserById (req, res, next) {
  Usuario.getUserById(req.swagger.params, res, next);
};

module.exports.updateUser = function updateUser (req, res, next) {
  Usuario.updateUser(req.swagger.params, res, next);
};
