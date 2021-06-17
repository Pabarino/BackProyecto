'use strict';

const jwt = require("jsonwebtoken");
const _db = require("../libs/database");
const mailer = require("../libs/mailer");
const table = "USER";

/**
 * Logs user into the system
 *
 *
 * email String The user email for login
 * password String The password for login in clear text
 * returns User
 **/
exports.login = function(args, res, next) {
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

/**
 * Logs out current logged in user session
 *
 *
 * no response value expected for this operation
 **/
 exports.logout = function () {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

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