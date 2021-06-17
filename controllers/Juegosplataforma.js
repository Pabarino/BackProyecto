'use strict';

var url = require('url');


var Juegosplataforma = require('./JuegosplataformaService');


module.exports.createGame_PLatform = function createGame_PLatform (req, res, next) {
  Juegosplataforma.createGame_PLatform(req.swagger.params, res, next);
};

module.exports.deleteGame_platform = function deleteGame_platform (req, res, next) {
  Juegosplataforma.deleteGame_platform(req.swagger.params, res, next);
};

module.exports.getAllGameByPlatformId = function getAllGameByPlatformId (req, res, next) {
  Juegosplataforma.getAllGameByPlatformId(req.swagger.params, res, next);
};

module.exports.getAllGame_Platforms = function getAllGame_Platforms (req, res, next) {
  Juegosplataforma.getAllGame_Platforms(req.swagger.params, res, next);
};

module.exports.getAllPlatformByGameId = function getAllPlatformByGameId (req, res, next) {
  Juegosplataforma.getAllPlatformByGameId(req.swagger.params, res, next);
};

module.exports.updateGame_Platform = function updateGame_Platform (req, res, next) {
  Juegosplataforma.updateGame_Platform(req.swagger.params, res, next);
};
