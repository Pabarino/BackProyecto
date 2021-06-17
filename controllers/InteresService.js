'use strict';

exports.createInterest = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Interes)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteInterest = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idUsuario (Integer)
  * idJuego (Integer)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getAllInterestById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idUsuario (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "idUsuario" : "",
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

exports.getAllInterests = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "idUsuario" : "",
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

exports.updateInterest = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idUsuario (Integer)
  * idJuego (Integer)
  * body (Interes)
  **/
  // no response value expected for this operation
  res.end();
}

