let costoTotale

const tariffa = 0.21;
const scontoVenti = 20/100;
const scontoQuaranta = 40/100

let km = prompt('Inserisci i kilometri che devi percorrere')
console.log(km)
// if(parseInt(km)){  
// }else{
//     prompt('Questo non è un kilometraggio valido, reinserire il valore')
//     console.log(km)
// }

let età = prompt('Insereisci la tua età');
console.log(età);

let costo = (km * tariffa);
console.log(costo);

if(età < 18){
    costoTotale = costo - (costo * scontoVenti);

}else if (età >= 65){
    costoTotale = costo - (costo * scontoQuaranta);

}else {
    costoTotale = costo
}

console.log(costoTotale)
