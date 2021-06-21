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
    
    let games_platforms = new Games_platforms();
    games_platforms.idJuego = body.idJuego;
    games_platforms.idPlataforma = body.idPlataforma;

    //validaciones


    //let _db = new DBConexion();
    let sql = `INSERT INTO ${table} (idJuego, idPlataforma) 
      VALUES(${games_platforms.idJuego}, '${games_platforms.idPlataforma}');`;
    
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
 exports.deleteGame_platform = function(idJuego, idPlataforma) {
  return new Promise(function(resolve, reject) {

    let sql = `DELETE FROM ${table} WHERE idPlataforma=${idPlataforma} AND idJuego=${idJuego};`;

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

    let sql = `SELECT idJuego FROM ${table} WHERE idPlataforma=${id};`;

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
    let sql = `SELECT * FROM ${table};`;

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

    let sql = `SELECT idPlatforma FROM ${table} WHERE idJuego=${id};`;

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
    
    let games_platforms = new Games_platforms();
    games_platforms.idJuego = idJuego;
    games_platforms.newIdJuego = body.idJuego;
    games_platforms.idPlatform = idPlatform;
    games_platforms.newidPlatform = body.idPlatform;

    //validaciones

    let sql = `UPDATE ${table} 
      SET idPlatform=${games_platforms.newidPlatform}, idJuego='${games_platforms.newIdJuego}'
      WHERE idPlatform=${games_platforms.idPlatform} AND idJuego=${games_platforms.idJuego} ;`;
    
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


