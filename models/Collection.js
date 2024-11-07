const db = require('../config/database');

const Collection = {
    // CREATE(inserir dados)
    create: (date, route, materials, weight, vehicle, documents, createdBy, callback) => {
        const sql = 'INSERT INTO collections (date, route, materials, weight, vehicle, documents, createdBy) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(sql, [date, route, materials, weight, vehicle, documents, createdBy], callback);
    },

    //READ(consultar dados)
    getAll: (callback) =>{
        const sql = 'SELECT * FROM collections'
        db.query(sql, callback);
    },


    //UPDATE
     update: (date, route, materials, weight, vehicle, documents, createdBy, id, callback) => {
         const sql = 'UPDATE collections SET date = ?, route = ?, materials = ?, weight = ?, vehicle = ?, documents = ?, createdBy = ? WHERE id = ?';
        db.query(sql, [date, route, materials, weight, vehicle, documents, createdBy, id], callback);
    },

    //DELETE
    delete: (id, callback) => {
        const sql = 'DELETE FROM collections WHERE id = ?'
        db.query(sql, [id], callback);
    }
}

module.exports = Collection;