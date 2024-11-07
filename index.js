const http = require('http');
const express = require('express');
const router = require('./routes/apiRoutes')
const app = express();


app.use(express.json());

app.use(router);



const port = 3000;
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})

// http://localhost:3000
// C:\Users\luana\OneDrive - FUNDAÇÃO MOVIMENTO DIREITO E CIDADANIA\CODE\TREINEE\node