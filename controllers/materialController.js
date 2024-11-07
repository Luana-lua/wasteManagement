const Material = require('../models/Material');

const materialController = {
    createMaterial: async (req, res) =>{
        const data = req.body;

        try{
            await Material.create(data);
            res.send('material criado');
        } catch(err){
            console.log(err);
            res.send('erro ao adicionar material');
        }
    },

    getAllMaterial: async(req, res) => {
        try{
            await Material.getAll();
            res.send('consulta do material realizada com sucesso');
        } catch(err){
            console.log(err);
            res.send('erro ao consultar');
        }
    }, 

    updateMaterial: async(req, res) => {
        const data = req.body;
        const id = req.params;

        try{
            await Material.update(data);
            res.send('material atualizada!');
        } catch(err){
            console.log(err);
            res.send('erro ao atualizar');
        }
    },

    deleteMaterial: async(req, res) => {
        const id = req.params;

        try{
            await Material.delete();
            res.send('material deletada!');
        } catch(err){
            console.log(err);
            res.send('erro ao deletar');
        }
    }
}

module.exports = materialController;