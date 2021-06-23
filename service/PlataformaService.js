'use strict';

var _db = require('../libs/database');
let table = 'Plataformas';

/**
 * Create Plataforma
 * 
 *
 * body platform Created platform object
 * no response value expected for this operation
 **/
 exports.createPlatform = function(body) {
  return new Promise(function(resolve, reject) {
    //validaciones


    //let _db = new DBConexion();
    let sql = `INSERT INTO ${table} (idPlataforma) 
      VALUES('${body.idPlataforma}')`;
    
    _db.query(sql).then(
      data => {
        if (data) 
          resolve({message: 'Plataforma insertado con exito', status: 201});
      },
      err => {
        resolve({message: 'Error al insertar platforma', status: 400});
      }
    );
  });
}

/**
 * Delete Plataforms
 * 
 *
 * id Integer The id of the platform that needs to be deleted
 * no response value expected for this operation
 **/
 exports.deletePlatform = function(id) {
  return new Promise(function(resolve, reject) {

    let sql = `DELETE FROM ${table} WHERE idPlataforma='${id}';`;

    _db.query(sql).then(
      data => {
        resolve(data);
      },
      error => {
        resolve({message: 'Error al borrar platforma', status: 404});
      }
    );    
    
  });
}

/**
 * Get all Plataforms
 * 
 *
 * returns List
 **/
 exports.getAllPlatforms = function() {
  return new Promise(function(resolve, reject) {

    //let users = [];
    let sql = `SELECT * FROM ${table};`;

    _db.query(sql).then(
      datas => {
        resolve(datas);
      },
      error => {
        resolve({message: 'Error al obtener platforma', status: 404});
      }
    );
    
  });
}

/**
 * Update Plataforms
 * 
 *
 * id Integer id of the platform that needs to be updated
 * body platform Updated platform object
 * no response value expected for this operation
 **/
 exports.updatePlatform = function(id,body) {
  return new Promise(function(resolve, reject) {
    //validaciones

    let sql = `UPDATE ${table} 
      SET idPlataforma='${body.idPlataforma}' 
      WHERE idPlataforma='${id}';`;
    
    _db.query(sql).then(
      data => {        
        resolve({message: 'Plataforma actualizado con exito', status: 200});
      },
      err => {
        resolve({message: 'Error al actualizar platforma', status: 400});
      }
    );

  });
}

