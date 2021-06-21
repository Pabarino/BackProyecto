'use strict';

var url = require('url');

var utils = require('../utils/writer.js');
var Juego = require('../service/JuegoService');


module.exports.createGame = function createGame (req, res, next) {
  var body = req.swagger.params['body'].value;
  Juego.createGame(body)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGame = function deleteGame (req, res, next) {
  var id = req.swagger.params['idJuego'].value;
  Juego.deleteGame(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGames = function getAllGames (req, res, next) {
  Juego.getAllGames()
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.getGameById = function getGameById (req, res, next) {
  var id = req.swagger.params['idJuego'].value;
  Juego.getGameById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGame = function updateGame (req, res, next) {
  var id = req.swagger.params['idJuego'].value;
  var body = req.swagger.params['body'].value;
  Juego.updateGame(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
