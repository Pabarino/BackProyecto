'use strict';

var _db = require('../libs/database');
let table = 'Juegos_plataformas';

/**
 * Create Games_platforms
 * 
 *
 * body Interest Created games_platforms object
 * no response value expected for this operation
 **/
 exports.createGame_Platform = function(body) {
  return new Promise(function(resolve, reject) {
    //validaciones


    //let _db = new DBConexion();
    let sql = `INSERT INTO ${table} (idJuego, idPlataforma) 
      VALUES(${body.idJuego}, '${body.idPlataforma}');`;
    
    _db.query(sql).then(
      data => {
        if (data) 
          resolve({message: 'Juegos_plataformas insertado con exito', status: 201});
      },
      err => {
        resolve({message: 'Error al insertar juegos_plataformas', status: 400});
      }
    );
  });
}

/**
 * Delete Games_platforms
 * 
 *
 * idJuego Integer The id of the games_platforms that needs to be deleted
 * idPlataforma Integer The id of the games_platforms that needs to be deleted
 * no response value expected for this operation
 **/
 exports.deleteGame_Platform = function(idJuego, idPlataforma) {
  return new Promise(function(resolve, reject) {

    let sql = `DELETE FROM ${table} WHERE idPlataforma='${idPlataforma}' AND idJuego=${idJuego};`;

    _db.query(sql).then(
      data => {
        resolve(data);
      },
      error => {
        resolve({message: 'Error al borrar juegos_plataformas', status: 404});
      }
    );    
    
  });
}

/**
 * Get all games by platform id
 * 
 *
 * id Integer The platform id of the game that needs to be fetched. Use 0 for testing. 
 * returns List
 **/
 exports.getAllGameByPlatformId = function(id) {
  return new Promise(function(resolve, reject) {

    let sql = `SELECT idJuego FROM ${table} WHERE idPlataforma='${id}';`;

    _db.query(sql).then(
      datas => {
        resolve(datas);
      },
      error => {
        resolve({message: 'Error al obtener juegos de la plataforma', status: 404});
      }
    );
    
  });
}

/**
 * Get all Games_platforms
 * 
 *
 * returns List
 **/
 exports.getAllGame_Platforms = function() {
  return new Promise(function(resolve, reject) {

    //let users = [];
    let sql = `SELECT * FROM ${table} ORDER BY idJuego;`;

    _db.query(sql).then(
      datas => {
        resolve(datas);
      },
      error => {
        resolve({message: 'Error al obtener juegos_plataformas', status: 404});
      }
    );
    
  });
}

/**
 * Get all platforms by game id
 * 
 *
 * id Integer The game id of the platforms that needs to be fetched. Use 0 for testing. 
 * returns List
 **/
 exports.getAllPlatformByGameId = function(id) {
  return new Promise(function(resolve, reject) {

    let sql = `SELECT idPlataforma FROM ${table} WHERE idJuego=${id};`;

    _db.query(sql).then(
      datas => {
        resolve(datas);
      },
      error => {
        resolve({message: 'Error al obtener plataformas del juego', status: 404});
      }
    );
    
  });
}

/**
 * Update Games_platforms
 * 
 *
 * idJuego Integer The id of the games_platforms that needs to be deleted
 * idPlataforma Integer The id of the games_platforms that needs to be deleted
 * body In Updated interests object
 * no response value expected for this operation
 **/
 exports.updateGame_Platform = function(idJuego, idPlatform,body) {
  return new Promise(function(resolve, reject) {
    //validaciones

    let sql = `UPDATE ${table} 
      SET idPlataforma='${body.idPlataforma}', idJuego=${body.idJuego}
      WHERE idPlataforma='${idPlatform}' AND idJuego=${idJuego} ;`;
    
    _db.query(sql).then(
      data => {        
        resolve({message: 'Juegos_generos actualizado con exito', status: 200});
      },
      err => {
        resolve({message: 'Error al actualizar Juegos_generos', status: 400});
      }
    );

  });
}


