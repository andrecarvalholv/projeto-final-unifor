import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null); // Limpar erros anteriores

        try {
            const response = await axios.post('http://localhost:5000/api/users', {
                name,
                email,
                password,
            });
            console.log('Usuário criado:', response.data);
            alert('Cadastro realizado com sucesso!');
            navigate('/login'); // Redirecionar para a tela de login após o registro
        } catch (err) {
            console.error('Erro ao registrar:', err);
            setError('Não foi possível realizar o cadastro. Tente novamente.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
};

export default Register;
