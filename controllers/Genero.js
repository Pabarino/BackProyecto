'use strict';

var url = require('url');


var Genero = require('./GeneroService');


module.exports.createGenre = function createGenre (req, res, next) {
  Genero.createGenre(req.swagger.params, res, next);
};

module.exports.deleteGenre = function deleteGenre (req, res, next) {
  Genero.deleteGenre(req.swagger.params, res, next);
};

module.exports.getAllGenres = function getAllGenres (req, res, next) {
  Genero.getAllGenres(req.swagger.params, res, next);
};

module.exports.updateGenre = function updateGenre (req, res, next) {
  Genero.updateGenre(req.swagger.params, res, next);
};
