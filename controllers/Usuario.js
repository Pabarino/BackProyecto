'use strict';

var url = require('url');


var utils = require('../utils/writer.js');
var Usuario = require('../service/UsuarioService');


module.exports.createUser = function createUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  Usuario.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  var id = req.swagger.params['idUsuario'].value;
  Usuario.deleteUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllUsers = function getAllUsers (req, res, next) {
  Usuario.getAllUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserById = function getUserById (req, res, next) {
  var id = req.swagger.params['idUsuario'].value;
  Usuario.getUserById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req, res, next) {
  var id = req.swagger.params['idUsuario'].value;
  var body = req.swagger.params['body'].value;
  Usuario.updateUser(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
