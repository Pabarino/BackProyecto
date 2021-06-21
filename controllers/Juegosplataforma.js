'use strict';

var url = require('url');

var utils = require('../utils/writer.js');
var Juegosplataforma = require('../service/JuegosplataformaService');


module.exports.createGame_Platform = function createGame_Platform (req, res, next) {
  var body = req.swagger.params['body'].value;
  Juegosplataforma.createGame_Platform(body)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGame_Platform = function deleteGame_Platform (req, res, next) {
  var idJuego = req.swagger.params['idJuego'].value;
  var idGenero = req.swagger.params['idPlataforma'].value;
  Juegosplataforma.deleteGame_Platform(idJuego, idGenero)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGameByPlatformId = function getAllGameByPlatformId (req, res, next) {
  var id = req.swagger.params['idPlataforma'].value;
  Juegosplataforma.getAllGameByGenreId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGame_Platforms = function getAllGame_Platforms (req, res, next) {
  Juegosplataforma.getAllGame_Platforms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllPlatformByGameId = function getAllPlatformByGameId (req, res, next) {
  var id = req.swagger.params['idJuego'].value;
  Juegosplataforma.getAllPlatformByGameId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGame_Platform = function updateGame_Platform (req, res, next) {
  var idJuego = req.swagger.params['idJuego'].value;
  var idGenero = req.swagger.params['idPlataforma'].value;
  var body = req.swagger.params['body'].value;
  Juegosplataforma.updateGame_Platform(idJuego, idGenero, body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
