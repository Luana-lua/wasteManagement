const db = require('../config/database');

const Material = {
    // CREATE(inserir dados)
    create: (type, subtype, value, callback) => {
        const sql = 'INSERT INTO material (type, subtype, value) VALUES (?, ?, ?)';
        db.query(sql, [type, subtype, value], callback);
    },

    //READ(consultar dados)
    getAll: (callback) =>{
        const sql = 'SELECT * FROM material'
        db.query(sql, callback);
    },


    //UPDATE
     update: (type, subtype, value, id, callback) => {
         const sql = 'UPDATE material SET type = ?, subtype = ?, value = ?, value = ? WHERE id = ?';
        db.query(sql, [type, subtype, value, id], callback);
    },

    //DELETE
    delete: (id, callback) => {
        const sql = 'DELETE FROM material WHERE id = ?'
        db.query(sql, [id], callback);
    }
}

module.exports = Material;