"user strict";

class Database {
  constructor() {

    const mysql = require('mysql');
    this.host = "next-up-games-db.cplzfkknujtl.eu-west-3.rds.amazonaws.com";
    this.user = "admin";
    this.password = "admin123";
    
    this.connStr =
      "host:" +
      this.host +
      ";user: " +
      this.user +
      ";password: " +
      this.password +
      ";";

    if (Database.instance) {
      return Database.instance;
    }

    Database.instance = this;
    return this;

    // con.connect(function(err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    //     con.end();
    // });
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