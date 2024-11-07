const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

const app = express();
const port = 3000;

app.post('/api/auth/login', (req, res)=>{
    const {username, password} = req.body;

    const user = db.find(user => user.username === username);

    if (!user) {
    return res.status(400).json({ message: 'Usuário não encontrado!' });
   }
   
   if(password === user.password){
    const token = jwt.sign({username}, 'secretkey', {expiresIn: '1h'});
        res.json({ message: 'login concluido', token});
   } else{
    res.status(401).json({message: 'credenciais inválidas'});
    }
});






app.get('/', (req, res)=>{
    res.send("Hello express")
});

app.listen(port, ()=>{
    console.log("rodando")
})



// jwt.verify(token, 'secreto', (err, decoded) => {
//     if (err) {
//       return res.status(401).send('Token inválido');
//     }
//     // O token é válido, e podemos usar os dados decodificados
//     console.log(decoded);
//   });