'use strict';

var url = require('url');


var Plataforma = require('./PlataformaService');


module.exports.createPlatform = function createPlatform (req, res, next) {
  Plataforma.createPlatform(req.swagger.params, res, next);
};

module.exports.deletePlatform = function deletePlatform (req, res, next) {
  Plataforma.deletePlatform(req.swagger.params, res, next);
};

module.exports.getAllPlatforms = function getAllPlatforms (req, res, next) {
  Plataforma.getAllPlatforms(req.swagger.params, res, next);
};

module.exports.updatePlatform = function updatePlatform (req, res, next) {
  Plataforma.updatePlatform(req.swagger.params, res, next);
};
