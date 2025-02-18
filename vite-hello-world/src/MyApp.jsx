import { heroes } from './data/hero';

export function MyApp(){
    console.log(heroes)

    const getHeroeById = (id) => heroes.find ( (heroe)=> heroe.id===id);    
    console.log(getHeroeById(2));

    const getHeroeByEmpresa = (empresa) => heroes.filter( (heroe) => heroe.owner===empresa);
    console.log(getHeroeByEmpresa('Marvel'));

    /*
    const nombre = 'Jorge';
    //const valor = 5;
    //valor = 7;
    console.log(nombre);
    if (true){
        let valor = 6;
        console.log(valor);
    }
    console.log(valor);
    

    const nombre = 'Jorge';
    const apellido = 'Carranza';
    //const nombreCompleto = nombre + ' ' + apellido;
    //alt 96 = ``
    const nombreCompleto = `${nombre} ${apellido}`; //template string
    console.log( nombreCompleto);


    function getSaludo(nombre){
        return 'Hola ' + nombre;
    }

    console.log(`Este es un texto: ${getSaludo(nombre)} `);


    const estudiante = {
        matricula: 'A000001',
        nombre: 'Jorge',
        edad: '40',
        dirección: {
            ciudad: 'Mty',
            zip: 64800
        }
    };

    console.table(estudiante);

    const estudiante2 ={...estudiante}; //para hacer un clon del estudiante
    estudiante2.nombre ='Ramon';
    console.table(estudiante2);

    console.log (estudiante);
    console.log (estudiante2);

    const arreglo = [1,2,3,4,5];
    console.log(arreglo)
    arreglo.push(1);
    console.log(arreglo)

    let arreglo2 = [...arreglo,7]; //para agregarle un valor adicional al final
    console.log(arreglo2)

    const dobles = arreglo2.map( function (i) {return i * 2})
    console.log(dobles)
    */



}




const saludo1 = function(nombre) {
    return nombre;
}

const saludo2 = (nombre) => {
    return nombre;
}

const saludo3 = (nombre) => nombre;