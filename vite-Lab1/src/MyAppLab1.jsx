import { heroes } from './data/hero';

export function MyAppLab1(){
    const jugador = {
        gamertag: 'wq22',
        ranking: 558,
        nowPlaying: 'yes'
    }

    console.table(jugador)

    console.log(heroes)

    const getHeroeById = (id) => heroes.find ( (heroe)=> heroe.id===id);    
    console.log(getHeroeById(2));

    const getHeroeByEmpresa = (empresa) => heroes.filter( (heroe) => heroe.owner===empresa);
    console.log(getHeroeByEmpresa('Marvel'));

    const nombre = 'Axel';
    const edad = 21;

    const nombreCompleto = `${nombre} con edad de: ${edad}`; 
    console.log(nombreCompleto)
    const laEdad = `"La edad de: ${nombre} un numero primo`
    console.log(laEdad)


    
}
