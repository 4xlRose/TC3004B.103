import React from 'react'

export const Quinto = () => {
    const promesa = new Promise( (resolve, reject) => {

        setTimeout( () => {
            resolve();
            console.log('Dentro de la promesa');
        },3000)
    });    



    promesa.then(()=> {
        console.log("Then")
    })
}

