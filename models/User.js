const db = require('../config/database');

const User = {
    // CREATE
    create: (username, password, role, callback) => {
        const sql = 'INSERT INTO user (username, password, role) VALUES(?, ?, ?)';
        db.query(sql, [username, password, role], callback);
    },

    //READ
    findUser: (username) => {
        return new Promise((res, reject) => {
            const sql = 'SELECT * FROM user WHERE username = ?'
            db.query(sql, [username], (err, result) => {
                if (err) return reject (err);
                res(result[0]);
            });
        });
    }
}

module.exports = User;


//EXEMPLO DE RESULT(linha7)
// {
//     "fieldCount": 0,
//     "affectedRows": 1,
//     "insertId": 5,
//     "serverStatus": 2,
//     "warningCount": 0,
//     "message": "",
//     "protocol41": true,
//     "changedRows": 0
//   }
// SE EU PEGAR result.insertId(linha9) ele ira imprimir apenas o id
