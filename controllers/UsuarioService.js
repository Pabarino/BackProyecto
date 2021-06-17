'use strict';

exports.createUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Usuario)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idUsuario (Integer)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getAllUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "apodo" : "aeiou",
  "password" : "aeiou",
  "idUsuario" : 123456789,
  "imagen" : "aeiou",
  "email" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUserById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idUsuario (Integer)
  **/
    var examples = {};
  examples['application/json'] = {
  "apodo" : "aeiou",
  "password" : "aeiou",
  "idUsuario" : 123456789,
  "imagen" : "aeiou",
  "email" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * idUsuario (Integer)
  * body (Usuario)
  **/
  // no response value expected for this operation
  res.end();
}

