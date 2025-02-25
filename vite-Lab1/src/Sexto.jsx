import React from "react";

export const Sexto = () => {
    const apikey = 'NfDtyDvjRHhpYYUKam8wFiea1lH18Ckn';

    const peticion = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=` + apikey);
    
    peticion.then( resp => resp.json() )
            .then( data =>{ console.log(data.data[0].url)})
            .catch( console.warn);

    


}
