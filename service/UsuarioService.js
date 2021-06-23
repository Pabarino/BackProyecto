'use strict';

var _db = require('../libs/database');
let table = 'Usuarios';

/**
 * Create user
 * 
 *
 * body User Created user object
 * no response value expected for this operation
 **/
 exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {

    //validaciones

    //let _db = new DBConexion();
    let sql = `INSERT INTO ${table} (password, email, apodo, imagen) 
      VALUES('${body.password}', '${body.email}', '${body.apodo}', '${body.imagen}');`;
    _db.query(sql).then(
      data => {
        if (data) 
          resolve({message: 'Usuario insertado con exito', status: 201});
      },
      err => {
        resolve({message: 'Error al insertar usuario', status: 400});
      }
    );
  });
}

/**
 * Delete user
 * 
 *
 * id Integer The id of the user that needs to be deleted
 * no response value expected for this operation
 **/
 exports.deleteUser = function(id) {
  return new Promise(function(resolve, reject) {

    let sql = `DELETE FROM ${table} WHERE idUsuario=${id};`;

    _db.query(sql).then(
      data => {
        resolve(data);
      },
      error => {
        resolve({message: 'Error al borrar usuario', status: 404});
      }
    );    
    
  });
}

/**
 * Get all users
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
        resolve({message: 'Error al obtener usuarios', status: 404});
      }
    );
    
  });
}

/**
 * Get user by id
 * 
 *
 * id Integer The id of the user that needs to be fetched. Use 0 for testing. 
 * returns User
 **/
 exports.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    
    let sql = `SELECT * FROM ${table} WHERE idUsuario=${id};`;

    _db.query(sql).then(
      data => {
        resolve(data);
      },
      error => {
        resolve({message: 'Error al obtener usuario', status: 404});
      }
    );
    
  });
}

/**
 * Update user
 * 
 *
 * id Integer id of the user that needs to be updated
 * body User Updated user object
 * no response value expected for this operation
 **/
 exports.updateUser = function(id,body) {
  return new Promise(function(resolve, reject) {

    //validaciones

    let sql = `UPDATE ${table} 
      SET password='${body.password}', email='${body.email}', apodo='${body.apodo}', imagen='${body.imagen}' 
      WHERE idUsuario=${id};`;
    
    _db.query(sql).then(
      data => {        
        resolve({message: 'Usuario actualizado con exito', status: 200});
      },
      err => {
        resolve({message: 'Error al actualizar usuario', status: 400});
      }
    );

  });
}

