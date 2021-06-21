'use strict';

var _db = require('../libs/database');
let table = 'Generos';

/**
 * Create genero
 * 
 *
 * body Genre Created Genre object
 * no response value expected for this operation
 **/
exports.createGenre = function(body) {
  return new Promise(function(resolve, reject) {
    
    let genre = new Genre();
    genre.id = body.idGenero;


    //validaciones


    //let _db = new DBConexion();
    let sql = `INSERT INTO ${table} (idGenero) 
      VALUES(${genre.id})`;
    
    _db.query(sql).then(
      data => {
        if (data) 
          resolve({message: 'Genero insertado con exito', status: 201});
      },
      err => {
        resolve({message: 'Error al insertar genero', status: 400});
      }
    );
  });
}

/**
 * Delete genre
 * 
 *
 * id Integer The id of the genre that needs to be deleted
 * no response value expected for this operation
 **/
 exports.deleteGenre = function(id) {
  return new Promise(function(resolve, reject) {

    let sql = `DELETE FROM ${table} WHERE idGenero=${id};`;

    _db.query(sql).then(
      data => {
        resolve(data);
      },
      error => {
        resolve({message: 'Error al borrar genre', status: 404});
      }
    );    
    
  });
}

/**
 * Get all genres
 * 
 *
 * returns List
 **/
 exports.getAllUsers = function() {
  return new Promise(function(resolve, reject) {

    //let users = [];
    let sql = `SELECT * FROM ${table};`;

    _db.query(sql).then(
      datas => {
        resolve(datas);
      },
      error => {
        resolve({message: 'Error al obtener genero', status: 404});
      }
    );
    
  });
}

/**
 * Update genre
 * 
 *
 * id Integer id of the genre that needs to be updated
 * body genre Updated genre object
 * no response value expected for this operation
 **/
 exports.updateGenre = function(id,body) {
  return new Promise(function(resolve, reject) {
    
    let genre = new Genre();
    genre.id = id;
    genre.newId = body.idGenero;

    //validaciones

    let sql = `UPDATE ${table} 
      SET employeeNumber=${genre.newId} 
      WHERE id=${genre.id};`;
    
    _db.query(sql).then(
      data => {        
        resolve({message: 'Genero actualizado con exito', status: 200});
      },
      err => {
        resolve({message: 'Error al actualizar genero', status: 400});
      }
    );

  });
}

