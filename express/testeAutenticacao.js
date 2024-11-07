// const express = require('express');
// const app = express();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // Usando JSON no corpo das requisições
// app.use(express.json());

// // Simulação de banco de dados
// let users = [];






// // Rota para registro de usuário
// app.post('/api/auth/register', (req, res) => {
//   const { username, password, email } = req.body;

//   // Verificar se o usuário já existe
//   const existingUser = users.find(user => user.email === email);
//   if (existingUser) {
//     return res.status(409).json({ message: 'Email já cadastrado!' });
//   }

//   // Criptografar a senha
//   const hashedPassword = bcrypt.hashSync(password, 10);

//   // Salvar o novo usuário
//   const newUser = { id: users.length + 1, username, email, password: hashedPassword };
//   users.push(newUser);

//   return res.status(201).json({ message: 'Usuário registrado com sucesso!', userId: newUser.id });
// });






// // Rota para login de usuário
// app.post('/api/auth/login', (req, res) => {
//   const { username, password } = req.body;

//   // Verificar se o usuário existe
//   const user = users.find(user => user.username === username);
//   if (!user) {
//     return res.status(400).json({ message: 'Usuário não encontrado!' });
//   }

//   // Verificar se a senha está correta
//   const isPasswordValid = bcrypt.compareSync(password, user.password);
//   if (!isPasswordValid) {
//     return res.status(401).json({ message: 'Senha incorreta!' });
//   }

//   // Gerar um token JWT
//   const token = jwt.sign({ userId: user.id, username: user.username }, 'secreto', { expiresIn: '1h' });

//   return res.json({ message: 'Login bem-sucedido!', token });
// });

// // Iniciar o servidor
// app.listen(3000, () => {
//   console.log('Servidor rodando na porta 3000');
// });
