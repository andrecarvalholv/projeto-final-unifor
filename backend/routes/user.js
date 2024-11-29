const express = require('express');
const User = require('../database/User');

const router = express.Router();

// Criar um novo usuário
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({ name, email, password });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
});

// Obter todos os usuários
router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// Atualizar um usuário
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.update(req.body, { where: { id } });
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao atualizar usuário' });
    }
});

// Excluir um usuário
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id } });
        res.send('Usuário deletado');
    } catch (err) {
        res.status(400).json({ error: 'Erro ao deletar usuário' });
    }
});

module.exports = router;
