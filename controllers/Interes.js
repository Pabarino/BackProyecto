'use strict';

var url = require('url');

var utils = require('../utils/writer.js');
var Interes = require('../service/InteresService');


module.exports.createInterest = function createInterest (req, res, next) {
  var body = req.swagger.params['body'].value;
  Interes.createInterest(body)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteInterest = function deleteInterest (req, res, next) {
  var idUsuario = req.swagger.params['idUsuario'].value;
  var idJuego = req.swagger.params['idJuego'].value;
  Interes.deleteInterest(idUsuario, idJuego)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllInterestById = function getAllInterestById (req, res, next) {
  var idUsuario = req.swagger.params['idUsuario'].value;
  Interes.getAllInterestById(idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllInterests = function getAllInterests (req, res, next) {
  Interes.getAllInterests()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateInterest = function updateInterest (req, res, next) {
  var idUsuario = req.swagger.params['idUsuario'].value;
  var idJuego = req.swagger.params['idJuego'].value;
  var body = req.swagger.params['body'].value;
  Interes.updateInterest(idUsuario, idJuego, body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
