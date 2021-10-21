/* Calcolo del prezzo del biglietto del treno
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/


const element = document.getElementById("train-ticket");
const unitPrice = 0.21;


// I ask how many km does the passenger want to do 
const km = parseFloat(prompt("How many km are you going to do?"));
console.log("km travelled by the passenger:", km);


// I ask the age of the passenger
const age = parseInt(prompt("How old are you?"));
console.log("Age of the passenger:", age);


// Ticket cost
let basePrice = (km * unitPrice).toFixed(2);
const underageDiscount = 0.2;
const over65Discount = 0.4;
let totalPrice;



if (age < 18) {

    totalPrice = (basePrice - underageDiscount).toFixed(2);
    element.innerHTML=
    `
    The base price of your train ticket is: ${basePrice} . 

    With our Young offer you are entitled to a 20% discount.

    You have to pay  ${totalPrice} &#8364; for your train ticket.
    `;

} else if (age >= 65) {

    totalPrice = (basePrice - over65Discount).toFixed(2);
    element.innerHTML=
    `The base price of your train ticket is: ${basePrice} .

    With our Senior offer  you are entitled to a 40% discount.

    You have to pay  ${totalPrice} &#8364; for your train ticket.
    `;

} else {

    totalPrice = (basePrice).toFixed(2);
    element.innerHTML=`The ticket price is: ${totalPrice} &#8364;`;

}


console.log(`The ticket price is: ${totalPrice} euro`);

