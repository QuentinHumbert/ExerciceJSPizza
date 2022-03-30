let nomPizza;
let nombrePizza;
let prixPizza;
let remisePizza;
let prixTotal;

nomPizza = `Reine`;
nombrePizza = `15`;

switch (nomPizza) {
    case `Reine`:
        prixPizza = 10;
        break;
    case `Calzone`:
        prixPizza = 9;
        break;
    case `Fromage`:
        prixPizza = 8;
        break;
    default:
        prixPizza = 0;
        break;
}
// if (nomPizza === `Reine`) {
//     prixPizza = 10;
// } else if (nomPizza === `Calzone`) {
//     prixPizza = 9;
// } else if (nomPizza === `Fromage`) {
//     prixPizza = 8;
// } else {
//     prixPizza = 0;
// }

nombrePizza >= 5 ? remisePizza = 2 : remisePizza = 0;
nombrePizza >= 10 ? remisePizza = 10 : remisePizza = 0;
// if (nombrePizza < 5) {
//     remisePizza = 0;
// } else if (nombrePizza >= 5) {
//     remisePizza = 2;
// } else if (nombrePizza > 10) {
//     remisePizza = 10;
// }

prixTotal = prixPizza * nombrePizza - remisePizza;

document.getElementById('nombrepizza').textContent = nombrePizza;
document.getElementById('typepizza').textContent = nomPizza;
document.getElementById('prixpizza').textContent = prixPizza;
document.getElementById('remise').textContent = remisePizza;
document.getElementById('prixtotal').textContent = prixTotal;

console.log(`Pizza: ${nomPizza}\nNombre de Pizza: ${nombrePizza}\nPrix unitaire: ${prixPizza}\nRemise: ${remisePizza}\nPrix total: ${prixTotal}`);