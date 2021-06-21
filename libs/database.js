"user strict";

class Database {
  constructor() {

    const mysql = require('mysql');

    var connection = mysql.createConnection({
      host: "next-up-games-db.cplzfkknujtl.eu-west-3.rds.amazonaws.com",
      user: "admin",
      password: "admin123",
      port: "3306"
    });
    
    connection.connect(function(err) {
      if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
      }
      console.log('Connected to database');
    });
    connection.end();
    
  }

  /**
   * Performs a query in the database and returns the data
   *
   * @param {string} query Query to perform in the database
   * @return
   */
   query(query) {
    return new Promise((resolve, reject) => {
      this.mysql.createConnection(this.connStr, (err, conn) => {
        if (err) {
          reject(err);
        }
        conn.query(query, (err, data) => {
          if (err) {
            reject(err);
          }
          if (data) {
            resolve(data);
          }
        });
      });
    });
  }
}

module.exports = new Database();