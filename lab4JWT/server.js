import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { username: 'mushu', password: 'mushu123', id: 1 },
  { username: 'juan', password: 'juan123', id: 2 }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    const token = jwt.sign({ username: user.username, id: user.id }, 'secretKey', { expiresIn: '1h' });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Credenciales incorrectas' });
});

app.get('/protected', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Acceso denegado' });
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    res.json({ message: 'Datos protegidos', user: decoded });
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
