import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const initialData = [
  { id: 1, nombre: "Jorge Carranza", puesto: "CEO", expertise: "Senior", edad: "40", empresa: "Tec" },
  { id: 2, nombre: "Ramon Velez", puesto: "Manager", expertise: "Senior", edad: "40", empresa: "Banorte" },
  { id: 3, nombre: "Hugo Sanchez", puesto: "CTO", expertise: "Senior", edad: "65", empresa: "Real Madrid" },
  { id: 4, nombre: "Rafael Marquez", puesto: "CFO", expertise: "Senior", edad: "44", empresa: "Barcelona" },
  { id: 5, nombre: "Sergio Perez", puesto: "CMO", expertise: "Senior", edad: "37", empresa: "Oracle Red Bull Racing" },
  { id: 6, nombre: "Max Verstappen", puesto: "F1", expertise: "Senior", edad: "27", empresa: "Oracle Red Bull Racing" },
  { id: 7, nombre: "Carlos Sainz", puesto: "F1", expertise: "Senior", edad: "31", empresa: "Williams Racing" },
];

const Manager = () => {
  const [data, setData] = useState(initialData);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [form, setForm] = useState({ id: "", nombre: "", puesto: "", expertise: "", edad: "", empresa: "" });

  const mostrarModalActualizar = (dato) => {
    setForm(dato);
    setModalActualizar(true);
  };

  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };

  const mostrarModalInsertar = () => {
    setForm({ id: data.length + 1, nombre: "", puesto: "", expertise: "", edad: "", empresa: "" });
    setModalInsertar(true);
  };

  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  const editar = (dato) => {
    setData(data.map((item) => (item.id === dato.id ? dato : item)));
    cerrarModalActualizar();
  };

  const eliminar = (dato) => {
    if (window.confirm(`¿Estás seguro de eliminar el elemento ${dato.id}?`)) {
      setData(data.filter((item) => item.id !== dato.id));
    }
  };

  const insertar = () => {
    setData([...data, { ...form, id: data.length + 1 }]);
    cerrarModalInsertar();
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <br />
      <Button color="success" onClick={mostrarModalInsertar}>
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
          {data.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.nombre}</td>
              <td>{dato.puesto}</td>
              <td>{dato.expertise}</td>
              <td>{dato.edad}</td>
              <td>{dato.empresa}</td>
              <td>
                <Button color="primary" onClick={() => mostrarModalActualizar(dato)}>
                  Editar
                </Button>{" "}
                <Button color="danger" onClick={() => eliminar(dato)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal para Insertar */}
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <h3>Insertar Nuevo Registro</h3>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>ID:</label>
            <input className="form-control" readOnly type="text" value={data.length + 1} />
          </FormGroup>
          <FormGroup>
            <label>Nombre:</label>
            <input className="form-control" name="nombre" type="text" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Puesto:</label>
            <input className="form-control" name="puesto" type="text" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Expertise:</label>
            <input className="form-control" name="expertise" type="text" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Edad:</label>
            <input className="form-control" name="edad" type="number" onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <label>Empresa:</label>
            <input className="form-control" name="empresa" type="text" onChange={handleChange} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={insertar}>
            Insertar
          </Button>
          <Button className="btn btn-danger" onClick={cerrarModalInsertar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      {/* Modal para Editar */}
      <Modal isOpen={modalActualizar}>
        <ModalHeader>
          <h3>Editar Registro</h3>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>ID:</label>
            <input className="form-control" readOnly type="text" value={form.id} />
          </FormGroup>
          <FormGroup>
            <label>Nombre:</label>
            <input className="form-control" name="nombre" type="text" onChange={handleChange} value={form.nombre} />
          </FormGroup>
          <FormGroup>
            <label>Puesto:</label>
            <input className="form-control" name="puesto" type="text" onChange={handleChange} value={form.puesto} />
          </FormGroup>
          <FormGroup>
            <label>Expertise:</label>
            <input className="form-control" name="expertise" type="text" onChange={handleChange} value={form.expertise} />
          </FormGroup>
          <FormGroup>
            <label>Edad:</label>
            <input className="form-control" name="edad" type="number" onChange={handleChange} value={form.edad} />
          </FormGroup>
          <FormGroup>
            <label>Empresa:</label>
            <input className="form-control" name="empresa" type="text" onChange={handleChange} value={form.empresa} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => editar(form)}>
            Editar
          </Button>
          <Button color="danger" onClick={cerrarModalActualizar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default Manager;
