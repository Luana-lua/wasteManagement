// controle de usuario
const User = require('..//models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();


const authController = {
    login: async (req, res) => {
        const { username, password } = req.body;

        try {
            const user = await User.findUser(username);
            if (!user) {
                res.send('usuario não encontrado')
            }
            const password = bcrypt.compareSync(password, user.password);
            if (!password) {
                res.send('senha invalida')
            }

            const token = jwt.sign({ id: user.id, role: user.role }, process.env.DB_KEY, { expiresIn: '1h' });

            res.send('login realizado com sucesso')
        } catch (err) {
            console.log(err)
            res.send('não foi possível fazer o login')
        }
    },

    register: async (req, res) => {
        //pedir username e password
        const { username, password, role } = req.body;

        try {
            //verficar se o user ja existe
            const user = await User.findUser({username});
            if (user) {
                res.send('Usuario ja existente');
            }

            //criar
            User.create(username, password, role);
        } catch (err){
            console.log(err)
            res.send('não foi possível fazer o login')
        }
    }
}

module.exports = authController;

//username, password, role