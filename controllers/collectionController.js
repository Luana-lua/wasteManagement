const Collections = require('../models/Collection');

const collectionController = {

    createCollection: async (req, res) =>{
        const data = req.body;
        try{
            await Collections.create(data);
            res.send('coleta concluida');
        } catch(err){
            console.log(err);
            res.send('erro ao efetuar coleta');
        }
    },

    getAllCollections: async(req, res) => {
        try{
            await Collections.getAll();
            res.send('consulta das coletas realizada com sucesso');
        } catch(err){
            console.log(err);
            res.send('erro ao consultar');
        }
    }, 

    updateCollections: async(req, res) => {
        const data = req.body;
        const id = req.params;

        try{
            await Collections.update(data);
            res.send('coleta atualizada!');
        } catch(err){
            console.log(err);
            res.send('erro ao atualizar');
        }
    },

    deleteCollections: async(req, res) => {
        const id = req.params;
        
        try{
            await Collections.delete();
            res.send('coleta deletada!');
        } catch(err){
            console.log(err);
            res.send('erro ao deletar');
        }
    }
}

module.exports = collectionController;