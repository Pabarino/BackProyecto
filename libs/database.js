"user strict";

class Database {
  constructor() {

    const mysql = require('mysql');

    this.connection = mysql.createConnection({
      host: "next-up-games-db.cplzfkknujtl.eu-west-3.rds.amazonaws.com",
      user: "admin",
      password: "admin123",
      port: "3306",
      database: "NextUpGames"
    });
    
    // connection.connect(function(err) {
    //   if (err) {
    //     console.error('Database connection failed: ' + err.stack);
    //     return;
    //   }
    //   console.log('Connected to database');
    // });
    // connection.end();

    this.connection.connect(function(err) {
      if (err)  {
        console.error('Database connection failed: ' + err.stack);
        return;
      }
      console.log('Connected to database');
      //Select all customers and return the result object:
      // connection.query("SELECT * FROM Usuarios", function (err, datas, fields) {
      //   if (err) throw err;
      //   console.log(datas);
      // });
    });
  }

  /**
   * Performs a query in the database and returns the data
   *
   * @param {string} query Query to perform in the database
   * @return
   */
   query(query) {
    return new Promise((resolve, reject) => {
      
      this.connection.query(query, (err, data) => {
        if (err) {
          reject(err);
        }
        if (data) {
          resolve(data);
        }
      });
    });
  }
}

module.exports = new Database();