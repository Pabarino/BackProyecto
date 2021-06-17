'use strict';

var url = require('url');


var Juego = require('../service/JuegoService');


module.exports.createGame = function createGame (req, res, next) {
  Juego.createGame(req.swagger.params, res, next);
};

module.exports.deleteGame = function deleteGame (req, res, next) {
  Juego.deleteGame(req.swagger.params, res, next);
};

module.exports.getAllGames = function getAllGames (req, res, next) {
  Juego.getAllGames(req.swagger.params, res, next);
};

module.exports.getGameById = function getGameById (req, res, next) {
  Juego.getGameById(req.swagger.params, res, next);
};

module.exports.updateGame = function updateGame (req, res, next) {
  Juego.updateGame(req.swagger.params, res, next);
};
