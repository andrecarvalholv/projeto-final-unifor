const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user'); // Importa as rotas de usuários
const sequelize = require('./database/db'); // Conexão com o banco de dados
const User = require('./database/User'); // Modelo de usuário

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Sincronizar o banco de dados
sequelize
    .sync({ force: false }) // 'force: false' garante que as tabelas não sejam recriadas a cada execução
    .then(() => console.log('Banco de dados sincronizado'))
    .catch(err => console.error('Erro ao sincronizar banco:', err));

// Rotas
app.use('/api/users', userRoutes);

// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
