const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    //pega token do cabeçalho de auth
    const token = req.headers['authorization']?.replace('Bearer ', '');

    // verifica se tem token
    if (!token) {
        return res.status(403).send({ message: 'Token não fornecido!' });
    }

     // validando o token JWT
     jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) return res.status(401).send('token inválido.');
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;