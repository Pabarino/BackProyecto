'use strict';

var _db = require('../libs/database');
let table = 'Interes';

/**
 * Create Interest
 * 
 *
 * body Interest Created interes object
 * no response value expected for this operation
 **/
exports.createInterest = function(body) {
  return new Promise(function(resolve, reject) {
    
    let interest = new Interest();
    interest.idJuego = body.idJuego;
    interest.idUsuario = body.idUsuario;

    //validaciones


    //let _db = new DBConexion();
    let sql = `INSERT INTO ${table} (idJuego, idUsuario) 
      VALUES(${interest.idJuego}, '${interest.idUsuario}');`;
    
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
 exports.deleteInterest = function(idJuego, idUsuario) {
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
      data => {
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

/**
 * Update interests
 * 
 *
 * idJuego Integer The id of the interest that needs to be deleted
 * iUsuario Integer The id of the interest that needs to be deleted
 * body In Updated interests object
 * no response value expected for this operation
 **/
 exports.updateInterests = function(idJuego, idUsuario,body) {
  return new Promise(function(resolve, reject) {
    
    let interest = new Interest();
    interest.idJuego = idJuego;
    interest.newIdJuego = body.idJuego;
    interest.idUsuario = idUsuario;
    interest.newIdUsuario = body.idUsuario;

    //validaciones

    let sql = `UPDATE ${table} 
      SET idUsuario=${interest.newIdUsuario}, idJuego='${interest.newIdJuego}'
      WHERE idUsuario=${interest.idUsuario} AND idJuego=${interest.idJuego} ;`;
    
    _db.query(sql).then(
      data => {        
        resolve({message: 'Interes actualizado con exito', status: 200});
      },
      err => {
        resolve({message: 'Error al actualizar interes', status: 400});
      }
    );

  });
}

