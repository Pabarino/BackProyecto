'use strict';

exports.changePassword = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  * oldPassword (String)
  * newPassword (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.login = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  * password (String)
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

exports.logout = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  res.end();
}

exports.recoverPassword = function(args, res, next) {
  /**
   * parameters expected in the args:
  * email (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.resetPassword = function(args, res, next) {
  /**
   * parameters expected in the args:
  * token (String)
  * newPassword (String)
  **/
  // no response value expected for this operation
  res.end();
}

