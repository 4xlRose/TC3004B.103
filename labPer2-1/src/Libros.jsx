import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from "reactstrap";

function App() {
    const [books, setBooks] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalActualizar, setModalActualizar] = useState(false);
    const [form, setForm] = useState({
        id: "",
        titulo: "",
        autor: "",
        anio: "",
        editorial: "",
        genero: "",
        paginas: "",
    });

    useEffect(() => {
        axios.get("http://localhost:5000/books")
            .then(response => setBooks(response.data))
            .catch(error => console.error("Error al obtener los libros:", error));
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const insertar = () => {
        const { titulo, autor, anio, editorial, genero, paginas } = form;

        if (!titulo || !autor || !anio || !editorial || !genero || !paginas) {
            alert("Todos los campos deben ser completados.");
            return;
        }

        axios.post("http://localhost:5000/books", { titulo, autor, anio, editorial, genero, paginas })
            .then((response) => {
                setBooks([...books, response.data]);
                setModalInsertar(false);
                setForm({
                    id: "",
                    titulo: "",
                    autor: "",
                    anio: "",
                    editorial: "",
                    genero: "",
                    paginas: "",
                });
            })
            .catch((error) => console.error("Error al insertar libro:", error));
    };

    const editar = () => {
        const { id, titulo, autor, anio, editorial, genero, paginas } = form;

        axios.put(`http://localhost:5000/books/${id}`, { titulo, autor, anio, editorial, genero, paginas })
            .then((res) => {
                const updatedBooks = books.map((b) =>
                    b.id === res.data.id ? { ...b, ...res.data } : b
                );
                setBooks(updatedBooks);
                setModalActualizar(false);
                setForm({
                    id: "",
                    titulo: "",
                    autor: "",
                    anio: "",
                    editorial: "",
                    genero: "",
                    paginas: "",
                });
            })
            .catch((err) => console.error("Error al actualizar el libro:", err));
    };

    const eliminar = (id) => {
        if (window.confirm("¿Seguro que deseas eliminar este libro?")) {
            axios.delete(`http://localhost:5000/books/${id}`)
                .then(() => {
                    const updatedBooks = books.filter((book) => book.id !== id);
                    setBooks(updatedBooks);
                })
                .catch((error) => console.error("Error al eliminar el libro:", error));
        }
    };

    const mostrarModalInsertar = () => {
        setForm({
            id: "",
            titulo: "",
            autor: "",
            anio: "",
            editorial: "",
            genero: "",
            paginas: "",
        });
        setModalInsertar(true);
    };

    const mostrarModalActualizar = (book) => {
        setForm(book);
        setModalActualizar(true);
    };

    const cerrarModalInsertar = () => {
        setModalInsertar(false);
    };

    const cerrarModalActualizar = () => {
        setModalActualizar(false);
    };

    return (
        <Container>
            <h1 className="my-4">Lista de Libros</h1>
            <Button color="success" onClick={mostrarModalInsertar}>Agregar Libro</Button>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Año</th>
                        <th>Editorial</th>
                        <th>Género</th>
                        <th>Páginas</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.titulo}</td>
                            <td>{book.autor}</td>
                            <td>{book.anio}</td>
                            <td>{book.editorial}</td>
                            <td>{book.genero}</td>
                            <td>{book.paginas}</td>
                            <td>
                                <Button color="primary" onClick={() => mostrarModalActualizar(book)}>Editar</Button>{" "}
                                <Button color="danger" onClick={() => eliminar(book.id)}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal isOpen={modalInsertar}>
                <ModalHeader>Agregar Libro</ModalHeader>
                <ModalBody>
                    {["titulo", "autor", "anio", "editorial", "genero", "paginas"].map((campo) => (
                        <FormGroup key={campo}>
                            <label>{campo.charAt(0).toUpperCase() + campo.slice(1)}:</label>
                            <input
                                className="form-control"
                                name={campo}
                                type="text"
                                value={form[campo] || ""}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    ))}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={insertar}>Insertar</Button>
                    <Button color="danger" onClick={cerrarModalInsertar}>Cancelar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalActualizar}>
                <ModalHeader>Editar Libro</ModalHeader>
                <ModalBody>
                    {["titulo", "autor", "anio", "editorial", "genero", "paginas"].map((campo) => (
                        <FormGroup key={campo}>
                            <label>{campo.charAt(0).toUpperCase() + campo.slice(1)}:</label>
                            <input
                                className="form-control"
                                name={campo}
                                type="text"
                                value={form[campo] || ""}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    ))}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={editar}>Actualizar</Button>
                    <Button color="danger" onClick={cerrarModalActualizar}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default App;