const express = require('express');
const router = express.Router();

//rota pra criar novo material
router.post('/', require('../controllers/materialController').createMaterial)
//rota pra listar tds materiais
router.get('/', require('../controllers/materialController').getAllMaterial)
//rota pra atualizar um material
router.put('/:id', require('../controllers/materialController').updateMaterial)
//rota pra deletar um material
router.delete('/:id', require('../controllers/materialController').deleteMaterial)

module.exports = router;