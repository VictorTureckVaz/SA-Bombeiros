var mysql = require('mysql2');

var db = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",//a a folow
  user: "root",
  password: "", //  ok,  fecha ai o teu
  database: "bombeirossateste",
});

const {TEST, GET_BOMBEIRO, SUBMIT, MATERIAIS, NULLQry} = require("./../database/queries");

db.connect(function(err) {
  if (err) throw err;
  console.log("Banquinho de dadinhos ON");
  
  db.query(TEST(), function(err, result) {
    if (err) throw err;
    console.log(result);
  });
});

module.exports = db;
