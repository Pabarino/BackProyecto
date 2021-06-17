'use strict';

exports.createPlatform = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Plataforma)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deletePlatform = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idPlataforma (Integer)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getAllPlatforms = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "idPlataforma" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updatePlatform = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idPlataforma (Integer)
  * body (Plataforma)
  **/
  // no response value expected for this operation
  res.end();
}

