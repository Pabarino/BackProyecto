'use strict';

exports.createGame_PLatform = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Juegos_plataforma)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteGame_platform = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idJuego (Integer)
  * idPlataforma (Integer)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getAllGameByPlatformId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idPlataforma (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "idPlataforma" : "",
  "idJuego" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAllGame_Platforms = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "idPlataforma" : "",
  "idJuego" : ""
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAllPlatformByGameId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idJuego (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "idPlataforma" : "",
  "idJuego" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateGame_Platform = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idJuego (Integer)
  * idPlataforma (Integer)
  * body (Juegos_plataforma)
  **/
  // no response value expected for this operation
  res.end();
}

