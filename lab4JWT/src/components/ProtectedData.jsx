import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProtectedData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login'; 
        return;
      }
      try {
        const res = await axios.get('http://localhost:5000/protected', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data);
      } catch (err) {
        window.location.href = '/login'; 
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; 
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: '600px' }}>
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Datos Protegidos</h4>
          <button className="btn btn-light btn-sm" onClick={handleLogout}>Cerrar sesión</button>
        </div>
        <div className="card-body">
          {data ? (
            <>
              <p><strong>Mensaje:</strong> {data.message}</p>
              {data.user && (
                <>
                  <p><strong>Usuario:</strong> {data.user.username}</p>
                  <p><strong>ID:</strong> {data.user.id}</p>
                </>
              )}
            </>
          ) : (
            <p>Cargando datos...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProtectedData;
