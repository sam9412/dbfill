const mysql = require('mysql');

module.exports=()=>{
  return mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'samuel941220',
    database:'almacenes'
  });
}
