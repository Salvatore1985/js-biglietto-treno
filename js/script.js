//*RECUPERO L'ELEMENTO DAL DOM

let elementName = document.getElementById("name");
let elementLastName = document.getElementById("last-name");
let elementAge = document.getElementById("age");
let elementKms = document.getElementById("kms");
let elementDiscount = document.getElementById("discount");
let elementPrice = document.getElementById("price");

//* CHIEDO ALL'UTENTE DI INSERIRE I DATI
const userName = prompt("Qual'è il tuo Nome ?", "Salvatore");
console.log("Il tuo Nome è :", userName);

const userLastName = prompt("Qual'è il tuo Cognome ?", "Cascone");
console.log("Il tuo Cognome è :", userLastName);

const userAge = parseInt(prompt("Quanti anni hai ?", "36"));
console.log("I tuoi anni sono :", userAge);

const userKms = parseInt(prompt("Quanti KM vuoi percorrere ?", "36"));
console.log("I Km che hai inserito sono :", userKms);

//* VARIABILE 
let userDiscount;
let userPrice = 0.21;
let sum = userPrice * userKms;

//* INSERISCO I DATI DEL DOM

elementName.innerHTML = userName;
elementLastName.innerHTML = userLastName;
elementAge.innerHTML = userAge;
elementKms.innerHTML = userKms;
elementDiscount.innerHTML = userDiscount;
elementPrice.innerHTML = sum;

// ! CONVALIDE
if (condition) {

} else {

}