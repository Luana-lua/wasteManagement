const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth')


router.post('/', verifyToken, require('../controllers/collectionController').createCollection)

router.get('/',verifyToken, require('../controllers/collectionController').getAllCollections)

router.put('/:id',verifyToken, require('../controllers/collectionController').updateCollections)

router.delete('/:id',verifyToken, require('../controllers/collectionController').deleteCollections)

module.exports = router;