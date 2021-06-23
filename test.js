'use strict';

var _db = require('./libs/database');
let table = 'Usuarios';


return new Promise(function(resolve, reject) {

    //let users = [];
    let sql = `SELECT * FROM ${table};`;
    
    _db.query(sql).then(
    datas => {
        console.log(datas)
        resolve(datas);
    },
    error => {
        resolve({message: 'Error al obtener usuarios', status: 404});
    }
    );
    
});
  