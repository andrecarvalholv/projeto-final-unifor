import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implementar lógica de autenticação
        console.log('Login:', { email, password });
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Entrar</button>
        </div>
    );
};

export default Login;
