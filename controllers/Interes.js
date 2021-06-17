'use strict';

var url = require('url');


var Interes = require('../service/InteresService');


module.exports.createInterest = function createInterest (req, res, next) {
  Interes.createInterest(req.swagger.params, res, next);
};

module.exports.deleteInterest = function deleteInterest (req, res, next) {
  Interes.deleteInterest(req.swagger.params, res, next);
};

module.exports.getAllInterestById = function getAllInterestById (req, res, next) {
  Interes.getAllInterestById(req.swagger.params, res, next);
};

module.exports.getAllInterests = function getAllInterests (req, res, next) {
  Interes.getAllInterests(req.swagger.params, res, next);
};

module.exports.updateInterest = function updateInterest (req, res, next) {
  Interes.updateInterest(req.swagger.params, res, next);
};
