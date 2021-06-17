'use strict';

exports.createGenre = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Genero)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteGenre = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idGenero (Integer)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getAllGenres = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "idGenero" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateGenre = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idGenero (Integer)
  * body (Genero)
  **/
  // no response value expected for this operation
  res.end();
}

