var mysql = require('mysql');

var db = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "bombeirossa",
});

const { TEST, GET_BOMBEIRO } = require("./../database/queries");

db.connect(function(err) {
  if (err) throw err;
  console.log("Banquinho de dadinhos ON");
  
  db.query(TEST(), function(err, result) {
    if (err) throw err;
    console.log(result);
  });
});

module.exports = db;
