'use strict';

var url = require('url');

var utils = require('../utils/writer.js');
var Juegosgenero = require('../service/JuegosgeneroService');


module.exports.createGame_Genre = function createGame_Genre (req, res, next) {
  var body = req.swagger.params['body'].value;
  Juegosgenero.createGame_Genre(body)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGame_Genre = function deleteGame_Genre (req, res, next) {
  var idJuego = req.swagger.params['idJuego'].value;
  var idGenero = req.swagger.params['idGenero'].value;
  Juegosgenero.deleteGame_Genre(idJuego, idGenero)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGameByGenreId = function getAllGameByGenreId (req, res, next) {
  var id = req.swagger.params['idGenero'].value;
  Juegosgenero.getAllGameByGenreId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGame_Genres = function getAllGame_Genres (req, res, next) {
  Juegosgenero.getAllGame_Genres()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGenreByGameId = function getAllGenreByGameId (req, res, next) {
  var id = req.swagger.params['idJuego'].value;
  Juegosgenero.getAllGameByGenreId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGame_Genre = function updateGame_Genre (req, res, next) {
  var idJuego = req.swagger.params['idJuego'].value;
  var idGenero = req.swagger.params['idGenero'].value;
  var body = req.swagger.params['body'].value;
  Juegosgenero.updateGame_Genre(idJuego, idGenero, body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
