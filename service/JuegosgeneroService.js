'use strict';

var _db = require('../libs/database');
let table = 'Juegos_generos';

/**
 * Create Games_genres
 * 
 *
 * body Interest Created games_genres object
 * no response value expected for this operation
 **/
 exports.createGame_Genre = function(body) {
  return new Promise(function(resolve, reject) {
    //validaciones


    //let _db = new DBConexion();
    let sql = `INSERT INTO ${table} (idJuego, idGenero) 
      VALUES(${body.idJuego}, '${body.idGenero}');`;
    
    _db.query(sql).then(
      data => {
        if (data) 
          resolve({message: 'Juegos_generos insertado con exito', status: 201});
      },
      err => {
        resolve({message: 'Error al insertar Juegos_generos', status: 400});
      }
    );
  });
}

/**
 * Delete Games_genres
 * 
 *
 * idJuego Integer The id of the games_genres that needs to be deleted
 * idGenero Integer The id of the games_genres that needs to be deleted
 * no response value expected for this operation
 **/
 exports.deleteGame_Genre = function(idJuego, idGenero) {
  return new Promise(function(resolve, reject) {

    let sql = `DELETE FROM ${table} WHERE idGenero='${idGenero}' AND idJuego=${idJuego};`;

    _db.query(sql).then(
      data => {
        resolve(data);
      },
      error => {
        resolve({message: 'Error al borrar Juegos_generos', status: 404});
      }
    );    
    
  });
}

/**
 * Get all games by genre id
 * 
 *
 * id Integer The genre id of the game that needs to be fetched. Use 0 for testing. 
 * returns List
 **/
 exports.getAllGameByGenreId = function(id) {
  return new Promise(function(resolve, reject) {

    let sql = `SELECT idJuego FROM ${table} WHERE idGenero='${id}';`;

    _db.query(sql).then(
      datas => {
        resolve(datas);
      },
      error => {
        resolve({message: 'Error al obtener juegos del genero', status: 404});
      }
    );
    
  });
}

/**
 * Get all Game_genres
 * 
 *
 * returns List
 **/
 exports.getAllGame_Genres = function() {
  return new Promise(function(resolve, reject) {

    //let users = [];
    let sql = `SELECT * FROM ${table};`;

    _db.query(sql).then(
      datas => {
        resolve(datas);
      },
      error => {
        resolve({message: 'Error al obtener juegos_generos', status: 404});
      }
    );
    
  });
}

/**
 * Get all genre by game id
 * 
 *
 * id Integer The game id of the genre that needs to be fetched. Use 0 for testing. 
 * returns List
 **/
 exports.getAllGenreByGameId = function(id) {
  return new Promise(function(resolve, reject) {

    let sql = `SELECT idGenero FROM ${table} WHERE idJuego=${id};`;

    _db.query(sql).then(
      data => {
        resolve(data);
      },
      error => {
        resolve({message: 'Error al obtener generos del juego', status: 404});
      }
    );
    
  });
}

/**
 * Update Game_genres
 * 
 *
 * idJuego Integer The id of the game_genres that needs to be deleted
 * idGenero Integer The id of the game_genres that needs to be deleted
 * body In Updated interests object
 * no response value expected for this operation
 **/
 exports.updateGame_Genre = function(idJuego, idGenero,body) {
  return new Promise(function(resolve, reject) {
    //validaciones

    let sql = `UPDATE ${table} 
      SET idGenero='${body.idGenero}', idJuego=${body.idJuego}
      WHERE idGenero='${idGenero}' AND idJuego=${idJuego} ;`;
    
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
