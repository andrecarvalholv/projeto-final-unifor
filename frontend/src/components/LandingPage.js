import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegação

const LandingPage = () => (
    <div className="container text-center mt-5">
        <h1>Bem-vindo à Aplicação Web</h1>
        <p>Gerencie usuários de forma simples e eficaz.</p>
        <div className="mt-4">
            <Link to="/login" className="btn btn-primary me-2">Login</Link>
            <Link to="/register" className="btn btn-secondary">Cadastrar-se</Link>
        </div>
    </div>
);

export default LandingPage;
