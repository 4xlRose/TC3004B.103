import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const data = [
    { id: 1, nombre: "Jorge Carranza", puesto: "CEO", expertise: "Senior", edad: "40", empresa: "Tec" },
    { id: 2, nombre: "Ramon Velez", puesto: "Manager", expertise: "Senior", edad: "40", empresa: "Banorte" },
    { id: 3, nombre: "Hugo Sanchez", puesto: "CTO", expertise: "Senior", edad: "65", empresa: "Real Madrid" },
    { id: 4, nombre: "Rafael Marquez", puesto: "CFO", expertise: "Senior", edad: "44", empresa: "Barcelona" },
    { id: 5, nombre: "Sergio Perez", puesto: "CMO", expertise: "Senior", edad: "37", empresa: "Oracle Red Bull Racing" },
    { id: 6, nombre: "Max Verstappen", puesto: "F1", expertise: "Senior", edad: "27", empresa: "Oracle Red Bull Racing" },
    { id: 7, nombre: "Carlos Sainz", puesto: "F1", expertise: "Senior", edad: "31", empresa: "Williams Racing" },
];

class Manager extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            nombre: "",
            puesto: "",
            expertise: "",
            edad: "",
            empresa: "",
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({ form: dato, modalActualizar: true });
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

    editar = (dato) => {
        const updatedData = this.state.data.map((registro) =>
            registro.id === dato.id ? { ...registro, ...dato } : registro
        );
        this.setState({ data: updatedData, modalActualizar: false });
    };

    eliminar = (dato) => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar el elemento ${dato.id}?`)) {
            const updatedData = this.state.data.filter((registro) => registro.id !== dato.id);
            this.setState({ data: updatedData, modalActualizar: false });
        }
    };

    insertar = () => {
        const valorNuevo = { ...this.state.form, id: this.state.data.length ? this.state.data[this.state.data.length - 1].id + 1 : 1 };
        this.setState({ data: [...this.state.data, valorNuevo], modalInsertar: false });
    };

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
            <>
                <Container>
                    <br />
                    <Button color="success" onClick={this.mostrarModalInsertar}>
                        Crear
                    </Button>
                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Puesto</th>
                                <th>Expertise</th>
                                <th>Edad</th>
                                <th>Empresa</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.nombre}</td>
                                    <td>{dato.puesto}</td>
                                    <td>{dato.expertise}</td>
                                    <td>{dato.edad}</td>
                                    <td>{dato.empresa}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)}>
                                            Editar
                                        </Button>{" "}
                                        <Button color="danger" onClick={() => this.eliminar(dato)}>
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <h3>Insertar nombre</h3>
                    </ModalHeader>
                    <ModalBody>
                        {["nombre", "puesto", "expertise", "edad", "empresa"].map((campo) => (
                            <FormGroup key={campo}>
                                <label>{campo.charAt(0).toUpperCase() + campo.slice(1)}:</label>
                                <input className="form-control" name={campo} type="text" onChange={this.handleChange} />
                            </FormGroup>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.insertar}>
                            Insertar
                        </Button>
                        <Button color="danger" onClick={this.cerrarModalInsertar}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <h3>Editar Registro</h3>
                    </ModalHeader>
                    <ModalBody>
                        {["nombre", "puesto", "expertise", "edad", "empresa"].map((campo) => (
                            <FormGroup key={campo}>
                                <label>{campo.charAt(0).toUpperCase() + campo.slice(1)}:</label>
                                <input
                                    className="form-control"
                                    name={campo}
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.form[campo] || ""}
                                />
                            </FormGroup>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)}>
                            Editar
                        </Button>
                        <Button color="danger" onClick={this.cerrarModalActualizar}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default Manager;