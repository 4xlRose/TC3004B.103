   require("dotenv").config();
   const express = require("express");
   const mysql = require("mysql2");
   const cors = require("cors");

   const app = express();
   app.use(cors());
   app.use(express.json());

   const db = mysql.createConnection({
       host: process.env.DB_HOST,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_NAME
   });

   db.connect((err) => {
       if (err) {
           console.error("Error de conexión a MySQL:", err);
           return;
       }
       console.log("Conectado a MySQL");
   });

app.get("/books", (req, res) => {
    db.query("SELECT * FROM books", (err, results) => {
        if (err) return res.status(500).json({ error: "Error al obtener los libros" });
        res.json(results);
    });
});

app.post("/books", (req, res) => {
    const { titulo, autor, anio, editorial, genero, paginas } = req.body;
    db.query(
        "INSERT INTO books (titulo, autor, anio, editorial, genero, paginas) VALUES (?, ?, ?, ?, ?, ?)",
        [titulo, autor, anio, editorial, genero, paginas],
        (err, result) => {
            if (err) return res.status(500).json({ error: "Error al insertar el libro" });
            res.json({ id: result.insertId, titulo, autor, anio, editorial, genero, paginas });
        }
    );
});

app.put("/books/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, autor, anio, editorial, genero, paginas } = req.body;
    
    db.query(
        "UPDATE books SET titulo = ?, autor = ?, anio = ?, editorial = ?, genero = ?, paginas = ? WHERE id = ?",
        [titulo, autor, anio, editorial, genero, paginas, id],
        (err) => {
            if (err) return res.status(500).json({ error: "Error al actualizar el libro" });
            res.json({ id, titulo, autor, anio, editorial, genero, paginas });
        }
    );
});


app.delete("/books/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM books WHERE id = ?", [id], (err) => {
        if (err) return res.status(500).json({ error: "Error al eliminar el libro" });
        res.json({ message: "Libro eliminado correctamente" });
    });
});
    
   const PORT = 5000;
   app.listen(PORT, () => {
       console.log(`Servidor corriendo en http://localhost:${PORT}`);
   });
