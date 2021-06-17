'use strict';

exports.createGame = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Juego)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteGame = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idJuego (Integer)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getAllGames = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "fechaSalida" : "aeiou",
  "desarrolladora" : "aeiou",
  "distribuidora" : "aeiou",
  "imagen" : "aeiou",
  "idJuego" : 123456789,
  "video" : "aeiou",
  "enlaceCompra" : "aeiou",
  "nombre" : "aeiou",
  "sinopsis" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getGameById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idJuego (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "fechaSalida" : "aeiou",
  "desarrolladora" : "aeiou",
  "distribuidora" : "aeiou",
  "imagen" : "aeiou",
  "idJuego" : 123456789,
  "video" : "aeiou",
  "enlaceCompra" : "aeiou",
  "nombre" : "aeiou",
  "sinopsis" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateGame = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idJuego (Integer)
  * body (Juego)
  **/
  // no response value expected for this operation
  res.end();
}

