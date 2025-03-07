import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const onLogin = () => {
        if (username === "A01611811") {
            navigate('/Perfil');
        } else {
            alert("Matrícula incorrecta. Inténtalo de nuevo.");
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <div className="card p-4 shadow-lg text-center" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="mb-3">Login</h2>
                <hr />
                <h5>Ingresa tu matrícula</h5>
                <input
                    type="text"
                    className="form-control my-3"
                    placeholder="Matrícula"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button className="btn btn-primary w-100" onClick={onLogin}>
                    Iniciar sesión
                </button>
            </div>
        </div>
    );
};
