'use strict';

var url = require('url');


var Juegosgenero = require('./JuegosgeneroService');


module.exports.createGame_Genre = function createGame_Genre (req, res, next) {
  Juegosgenero.createGame_Genre(req.swagger.params, res, next);
};

module.exports.deleteGame_Genre = function deleteGame_Genre (req, res, next) {
  Juegosgenero.deleteGame_Genre(req.swagger.params, res, next);
};

module.exports.getAllGameByGenreId = function getAllGameByGenreId (req, res, next) {
  Juegosgenero.getAllGameByGenreId(req.swagger.params, res, next);
};

module.exports.getAllGame_Genres = function getAllGame_Genres (req, res, next) {
  Juegosgenero.getAllGame_Genres(req.swagger.params, res, next);
};

module.exports.getAllGenreByGameId = function getAllGenreByGameId (req, res, next) {
  Juegosgenero.getAllGenreByGameId(req.swagger.params, res, next);
};

module.exports.updateGame_Genre = function updateGame_Genre (req, res, next) {
  Juegosgenero.updateGame_Genre(req.swagger.params, res, next);
};
