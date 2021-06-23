'use strict';

var _db = require('../libs/database');
let table = 'Interes';

/**
 * Create Interest
 * 
 *
 * body Interest Created interest object
 * no response value expected for this operation
 **/
exports.createInterest = function(body) {
  return new Promise(function(resolve, reject) {
    //validaciones

    //let _db = new DBConexion();
    let sql = `INSERT INTO ${table} (idJuego, idUsuario) 
      VALUES(${body.idJuego}, '${body.idUsuario}');`;
    
    _db.query(sql).then(
      data => {
        if (data) 
          resolve({message: 'Interes insertado con exito', status: 201});
      },
      err => {
        resolve({message: 'Error al insertar interes', status: 400});
      }
    );
  });
}

/**
 * Delete interest
 * 
 *
 * idJuego Integer The id of the interest that needs to be deleted
 * iUsuario Integer The id of the interest that needs to be deleted
 * no response value expected for this operation
 **/
 exports.deleteInterest = function(idUsuario, idJuego) {
  return new Promise(function(resolve, reject) {

    let sql = `DELETE FROM ${table} WHERE idUsuario=${idUsuario} AND idJuego=${idJuego};`;

    _db.query(sql).then(
      data => {
        resolve(data);
      },
      error => {
        resolve({message: 'Error al borrar interes', status: 404});
      }
    );    
    
  });
}

/**
 * Get all interest by id
 * 
 *
 * id Integer The id of the interest that needs to be fetched. Use 0 for testing. 
 * returns List
 **/
exports.getAllInterestById = function(id) {
  return new Promise(function(resolve, reject) {

    let sql = `SELECT idJuego FROM ${table} WHERE idUsuario=${id};`;

    _db.query(sql).then(
      datas => {
        resolve(datas);
      },
      error => {
        resolve({message: 'Error al obtener intereses del usuario', status: 404});
      }
    );
    
  });
}

/**
 * Get all interests
 * 
 *
 * returns List
 **/
 exports.getAllInterests = function() {
  return new Promise(function(resolve, reject) {

    //let users = [];
    let sql = `SELECT * FROM ${table};`;

    _db.query(sql).then(
      datas => {
        resolve(datas);
      },
      error => {
        resolve({message: 'Error al obtener intereses', status: 404});
      }
    );
    
  });
}


