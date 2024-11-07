const mysql = require('mysql2');
require('dotenv').config();


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,  
  password: process.env.DB_PASSWORD,  
  database: process.env.DB_NAME 
});

// test de conexao
connection.connect((err) => {
  if (err) {
    console.error('erro!', err.stack);
    return;
  }
  console.log('conectado!');
});
// Exportando a conexão para que outros arquivos possam utilizá-la
module.exports = connection;