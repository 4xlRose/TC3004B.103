import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        matricula: "A00000000",
        nombre: "Axel",
        apellidos: "Grande",
        edad: "21",
        universidad: "Tec",
        carrera: "ITC"
    });


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };

    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData(formState); 
    };

    return (
        <>
        <form onSubmit = {handleSubmit}>
            <h1>Formulario Simple</h1><hr />

            <input 
                type="text" 
                className="form-control" 
                placeholder="Matrícula" 
                name="matricula"
                    value={ formState.matricula }
                    onChange={ onInputChange }
            />
            <input 
                type="text" 
                className="form-control mt-2" 
                placeholder="Nombre" 
                name="nombre"
                    value={ formState.nombre }
                    onChange={ onInputChange }
            />
            <input 
                type="text" 
                className="form-control mt-2" 
                placeholder="Apellidos" 
                name="apellidos"
                    value={ formState.apellidos }
                    onChange={ onInputChange }
            />
            <input type="text" 
                className="form-control mt-2" 
                placeholder="Edad" 
                name="edad"
                    value={ formState.edad }
                    onChange={ onInputChange }
            />
            <input type="text" 
                className="form-control mt-2" 
                placeholder="Universidad" 
                name="universidad"
                    value={ formState.universidad }
                    onChange={ onInputChange }
            />
            <input type="text" 
                className="form-control mt-2" 
                placeholder="Carrera" 
                name="carrera"
                    value={ formState.carrera }
                    onChange={ onInputChange }
            />
            <button type="submit" className="btn btn-primary mt-2">
                Dame la información
            </button>
        </form>
        
        {submittedData && (
                <div className="mt-3">
                    <h2>Información ingresada:</h2>
                    <p>
                        Hola {submittedData.nombre} {submittedData.apellidos}, con matrícula{" "}
                        {submittedData.matricula}. Actualmente tienes {submittedData.edad} años y estudias{" "}
                        {submittedData.carrera} en {submittedData.universidad}.
                    </p>
                </div>
            )}
        </>
    );
};