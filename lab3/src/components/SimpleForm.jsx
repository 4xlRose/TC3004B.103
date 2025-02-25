import { useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {
        const [formState, setFormState] = useState({
        matricula: '',
        nombre: 'Axel',
        apellidos: '',
        edad: '',
        universidad: '',
        carrera: ''

    });

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({...formState, [ name ]: value
        });
    }

    return (
        <>
        <h1>Formulario Simple</h1><hr />
        <h2>Hola {formState.nombre} {formState.apellidos}, con matrícula {formState.matricula}. Actualmente tienes {formState.edad}, y estudias {formState.carrera} en {formState.universidad} </h2>
        <input type="matricula" className="form-control" placeholder="Matrícula" name="matricula"
            value={ formState.matricula }
            onChange={ onInputChange }
        />
        <input type="nombre" className="form-control mt-2" placeholder="Nombre" name="nombre"
            value={ formState.nombre }
            onChange={ onInputChange }
        />
        <input type="apellidos" className="form-control mt-2" placeholder="Apellidos" name="apellidos"
            value={ formState.apellidos }
            onChange={ onInputChange }
        />
        <input type="edad" className="form-control mt-2" placeholder="Edad" name="edad"
            value={ formState.edad }
            onChange={ onInputChange }
        />
        <input type="universidad" className="form-control mt-2" placeholder="Universidad" name="universidad"
            value={ formState.universidad }
            onChange={ onInputChange }
        />
            <input type="carrera" className="form-control mt-2" placeholder="Carrera" name="carrera"
            value={ formState.carrera }
            onChange={ onInputChange }
        />
        <button className = "btn btn-primary" onClick={()=> setCounter(counter + 1)}>Dame la información</button>
        </>
    )
}
