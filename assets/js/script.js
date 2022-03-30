//Déclaration des variables
let nomPizza;       
let nombrePizza;
let prixPizza;
let remisePizza;
let prixTotal;

//Attribution des valeur
nomPizza = `Reine`; 
nombrePizza = `15`;

//Switch pour identifier le nom de la pizza et y assigner le prix
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

//Variante if/else if pour identification pizza et assignement du prix
// if (nomPizza === `Reine`) { 
//     prixPizza = 10;
// } else if (nomPizza === `Calzone`) {
//     prixPizza = 9;
// } else if (nomPizza === `Fromage`) {
//     prixPizza = 8;
// } else {
//     prixPizza = 0;
// }

//Condition ternaire sur la remise
nombrePizza >= 5 ? remisePizza = 2 : remisePizza = 0;       
nombrePizza >= 10 ? remisePizza = 10 : remisePizza = 0;

// Variante if/else if pour la remise
// if (nombrePizza < 5) {
//     remisePizza = 0;
// } else if (nombrePizza >= 5) {
//     remisePizza = 2;
// } else if (nombrePizza > 10) {
//     remisePizza = 10;
// }

//Calcul du prix total
prixTotal = prixPizza * nombrePizza - remisePizza;          

//Ajout de la valeur des variables dans leur span html respectif
document.getElementById('nombrepizza').textContent = nombrePizza; 
document.getElementById('typepizza').textContent = nomPizza;
document.getElementById('prixpizza').textContent = prixPizza;
document.getElementById('remise').textContent = remisePizza;
document.getElementById('prixtotal').textContent = prixTotal;

//Consolelog pour tester les variables et les conditions
console.log(`Pizza: ${nomPizza}\nNombre de Pizza: ${nombrePizza}\nPrix unitaire: ${prixPizza}\nRemise: ${remisePizza}\nPrix total: ${prixTotal}`);