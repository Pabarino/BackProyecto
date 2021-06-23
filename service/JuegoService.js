'use strict';

var _db = require('../libs/database');
let table = 'Juegos';

/**
 * Create game
 * 
 *
 * body User Created user object
 * no response value expected for this operation
 **/
 exports.createGame = function(body) {
  return new Promise(function(resolve, reject) {
    //validaciones

    //let _db = new DBConexion();
    let sql = `INSERT INTO ${table} (nombre, imagen, fechaSalida, sinopsis, desarrolladora, distribuidora, video, enlaceCompra) 
      VALUES('${body.nombre}', '${body.imagen}', '${body.fechaSalida}', '${body.sinopsis}', '${body.desarrolladora}', '${body.distribuidora}', '${body.video}', '${body.enlaceCompra}');`;
    
    _db.query(sql).then(
      data => {
        if (data) 
          resolve({message: 'Juego insertado con exito', status: 201});
      },
      err => {
        resolve({message: 'Error al insertar juego', status: 400});
      }
    );
  });
}

/**
 * Delete game
 * 
 *
 * id Integer The id of the game that needs to be deleted
 * no response value expected for this operation
 **/
 exports.deleteGame = function(id) {
  return new Promise(function(resolve, reject) {

    let sql = `DELETE FROM ${table} WHERE idJuego=${id};`;

    _db.query(sql).then(
      data => {
        resolve(data);
      },
      error => {
        resolve({message: 'Error al borrar juego', status: 404});
      }
    );    
    
  });
}

/**
 * Get all games
 * 
 *
 * returns List
 **/
 exports.getAllGames = function() {
  return new Promise(function(resolve, reject) {

    //let users = [];
    let sql = `SELECT * FROM ${table};`;

    _db.query(sql).then(
      datas => {
        resolve(datas);
      },
      error => {
        resolve({message: 'Error al obtener juegos', status: 404});
      }
    );
    
  });
}

/**
 * Get game by id
 * 
 *
 * id Integer The id of the game that needs to be fetched. Use 0 for testing. 
 * returns User
 **/
 exports.getGameById = function(id) {
  return new Promise(function(resolve, reject) {

    let sql = `SELECT * FROM ${table} WHERE idJuego=${id};`;

    _db.query(sql).then(
      data => {
        resolve(data);
      },
      error => {
        resolve({message: 'Error al obtener juego', status: 404});
      }
    );
    
  });
}

/**
 * Update game
 * 
 *
 * id Integer id of the game that needs to be updated
 * body Game Updated game object
 * no response value expected for this operation
 **/
 exports.updateGame = function(id,body) {
  return new Promise(function(resolve, reject) {
    //validaciones

    let sql = `UPDATE ${table} 
      SET nombre='${body.nombre}', imagen='${body.imagen}', fechaSalida='${body.fechaSalida}', sinopsis='${body.sinopsis}', desarrolladora='${body.desarrolladora}', distribuidora='${body.distribuidora}', video='${body.video}', enlaceCompra='${body.enlaceCompra}' 
      WHERE idJuego=${id};`;
    
    _db.query(sql).then(
      data => {        
        resolve({message: 'Juego actualizado con exito', status: 200});
      },
      err => {
        resolve({message: 'Error al actualizar juego', status: 400});
      }
    );

  });
}

