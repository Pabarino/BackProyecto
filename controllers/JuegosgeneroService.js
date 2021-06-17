'use strict';

exports.createGame_Genre = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Juegos_genero)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteGame_Genre = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idJuego (Integer)
  * idGenero (Integer)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getAllGameByGenreId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idGenero (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "idGenero" : "",
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

exports.getAllGame_Genres = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "idGenero" : "",
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

exports.getAllGenreByGameId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idJuego (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "idGenero" : "",
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

exports.updateGame_Genre = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idJuego (Integer)
  * idGenero (Integer)
  * body (Juegos_genero)
  **/
  // no response value expected for this operation
  res.end();
}

