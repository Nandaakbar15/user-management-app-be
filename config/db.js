var mysql = require("mysql");

var hostname = "4x0g9l.h.filess.io";
var database = "NewProject12_greatlytax";
var port = "61002";
var username = "NewProject12_greatlytax";
var password = "8c8b82b85a51c44a67346fc267104d2a69f72199";

var con = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("SELECT 1+1").on("result", function (row) {
  console.log(row);
});
