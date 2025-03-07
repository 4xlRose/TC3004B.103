import { useRef } from "react";
export const Focus = () => {

    const inputRef = useRef();
    
    const onClick=()=>{
        //document.querySelector('input').select();
        inputRef.current.select();
    }
    
    return (
        <>
            <h1>Pantalla Focus</h1>
            <hr></hr>
            <input type="text" placeholder="Nombre" className="form-control"></input>
            <input ref={inputRef} type="text" placeholder="Apellido" className="form-control"></input>
            <input type="text" placeholder="Edad" className="form-control"/>
            <button className="btn btn-primary mt2" onClick={ onClick} >Set focus</button>
        </>
    )
}
