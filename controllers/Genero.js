'use strict';

var url = require('url');


var utils = require('../utils/writer.js');
var Genero = require('../service/GeneroService');


module.exports.createGenre = function createGenre (req, res, next) {
  var body = req.swagger.params['body'].value;
  Genero.createGenre(body)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGenre = function deleteGenre (req, res, next) {
  var id = req.swagger.params['idGenero'].value;
  Genero.deleteGenre(id)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGenres = function getAllGenres (req, res, next) {
  Genero.getAllGenres()
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGenre = function updateGenre (req, res, next) {
  var id = req.swagger.params['idGenero'].value;
  var body = req.swagger.params['body'].value;
  Genero.updateGenre(id, body)
    .then(function (response) {
      utils.writeJson(res, response, response.status);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
