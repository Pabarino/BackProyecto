'use strict';

var url = require('url');

var utils = require('../utils/writer.js');
var Plataforma = require('../service/PlataformaService');


module.exports.createPlatform = function createPlatform (req, res, next) {
  var body = req.swagger.params['body'].value;
  Plataforma.createPlatform(body)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePlatform = function deletePlatform (req, res, next) {
  var id = req.swagger.params['idPlataforma'].value;
  Plataforma.deletePlatform(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });(req.swagger.params, res, next);
};

module.exports.getAllPlatforms = function getAllPlatforms (req, res, next) {
  Plataforma.getAllPlatforms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePlatform = function updatePlatform (req, res, next) {
  var id = req.swagger.params['idPlataforma'].value;
  var body = req.swagger.params['body'].value;
  Plataforma.updatePlatform(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
