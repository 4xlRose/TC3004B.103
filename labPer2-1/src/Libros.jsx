import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const books = [
    { id: 1, titulo: "El camino de los reyes", autor: "Brandon Sanderson", anio: 2010, editorial: "Tor Books", genero: "Fantasía épica", paginas: 1007 },
    { id: 2, titulo: "Palabras radiantes", autor: "Brandon Sanderson", anio: 2014, editorial: "Tor Books", genero: "Fantasía épica", paginas: 1088 },
    { id: 3, titulo: "Juramentada", autor: "Brandon Sanderson", anio: 2017, editorial: "Tor Books", genero: "Fantasía épica", paginas: 1248 },
    { id: 4, titulo: "El ritmo de la guerra", autor: "Brandon Sanderson", anio: 2020, editorial: "Tor Books", genero: "Fantasía épica", paginas: 1232 },
    { id: 5, titulo: "Juego de tronos", autor: "George R. R. Martin", anio: 1996, editorial: "Bantam Books", genero: "Fantasía", paginas: 694 },
    { id: 6, titulo: "Choque de reyes", autor: "George R. R. Martin", anio: 1998, editorial: "Bantam Books", genero: "Fantasía", paginas: 761 },
    { id: 7, titulo: "Tormenta de espadas", autor: "George R. R. Martin", anio: 2000, editorial: "Bantam Books", genero: "Fantasía", paginas: 973 },
    { id: 8, titulo: "Festín de cuervos", autor: "George R. R. Martin", anio: 2005, editorial: "Bantam Books", genero: "Fantasía", paginas: 753 },
    { id: 9, titulo: "Danza de dragones", autor: "George R. R. Martin", anio: 2011, editorial: "Bantam Books", genero: "Fantasía", paginas: 1040 },
];

class BookManager extends React.Component {
    state = {
        books: books,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            titulo: "",
            autor: "",
            anio: "",
            editorial: "",
            genero: "",
            paginas: "",
        },
    };

    mostrarModalActualizar = (libro) => {
        this.setState({ form: libro, modalActualizar: true });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({ modalInsertar: true });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (libro) => {
        const updatedBooks = this.state.books.map((b) => (b.id === libro.id ? { ...b, ...libro } : b));
        this.setState({ books: updatedBooks, modalActualizar: false });
    };

    eliminar = (libro) => {
        if (window.confirm(`¿Seguro que deseas eliminar "${libro.titulo}"?`)) {
            const updatedBooks = this.state.books.filter((b) => b.id !== libro.id);
            this.setState({ books: updatedBooks, modalActualizar: false });
        }
    };

    insertar = () => {
        const nuevoLibro = { ...this.state.form, id: this.state.books.length ? this.state.books[this.state.books.length - 1].id + 1 : 1 };
        this.setState({ books: [...this.state.books, nuevoLibro], modalInsertar: false });
    };

    handleChange = (e) => {
        this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } });
    };

    render() {
        return (
            <>
                <Container>
                    <br />
                    <Button color="success" onClick={this.mostrarModalInsertar}>Agregar Libro</Button>
                    <br /><br />
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Año</th>
                                <th>Editorial</th>
                                <th>Género</th>
                                <th>Páginas</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.books.map((libro) => (
                                <tr key={libro.id}>
                                    <td>{libro.id}</td>
                                    <td>{libro.titulo}</td>
                                    <td>{libro.autor}</td>
                                    <td>{libro.anio}</td>
                                    <td>{libro.editorial}</td>
                                    <td>{libro.genero}</td>
                                    <td>{libro.paginas}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.mostrarModalActualizar(libro)}>Editar</Button>{" "}
                                        <Button color="danger" onClick={() => this.eliminar(libro)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>Agregar Libro</ModalHeader>
                    <ModalBody>
                        {["titulo", "autor", "año", "editorial", "genero", "paginas"].map((campo) => (
                            <FormGroup key={campo}>
                                <label>{campo.charAt(0).toUpperCase() + campo.slice(1)}:</label>
                                <input className="form-control" name={campo} type="text" onChange={this.handleChange} />
                            </FormGroup>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.insertar}>Insertar</Button>
                        <Button color="danger" onClick={this.cerrarModalInsertar}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>Editar Libro</ModalHeader>
                    <ModalBody>
                        {["titulo", "autor", "año", "editorial", "genero", "paginas"].map((campo) => (
                            <FormGroup key={campo}>
                                <label>{campo.charAt(0).toUpperCase() + campo.slice(1)}:</label>
                                <input className="form-control" name={campo} type="text" onChange={this.handleChange} value={this.state.form[campo] || ""} />
                            </FormGroup>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)}>Editar</Button>
                        <Button color="danger" onClick={this.cerrarModalActualizar}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default BookManager;
