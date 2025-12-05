let nome = "Marco";
nome = "Luca";
console.log(nome); // Output: string

let isOnline = true;
console.log(isOnline); // Output: boolean

let collezione = ["carte", "monete", "figurine"];
console.log(collezione[0]); // Output: array

let persona = {
  nome: "Anna",
  età: 28,
  città: "Roma",
  coloriPreferiti: ["blu", "verde", "rosso"],
};
console.log(persona); // Output: object
console.log(persona.coloriPreferiti[1]); // Output: verde

let name = "Sandro";
console.log(typeof name); // Output: string

const age = 30;
console.log(typeof age); // Output: number

const city = "Milano";
console.log(typeof city); // Output: string

const person = "database:hosting.com";
console.log(person); // Output: string

const numero = 42.84545873845793;
console.log(numero.toFixed(2)); // Output: 42.85

let numeroIntero = 43;
console.log(typeof numeroInterno); // Output: number

let numeroInt = "43";
console.log(typeof numeroInt); // Output: string

let incremento = 5;
incremento++;
console.log(incremento); // Output: 6

// Operatore di assegnazione
let x = 10;
x += 5; // x = x + 5, anziche riscrivere 2 volte la variabile utilizzo un operatore di assegnazione che mi riassume l'operazione
console.log(x); // Output: 15

//Operatori di comparazione
let y = 20;
console.log(y >= 10); // true

// Differenza tra uguaglianza debole e stretta
let z = "15";
console.log(z == 15); //true
console.log(z === 15); //false

// Concatenazione di stringhe
let stringa1 = "Ciao";
let stringa2 = "Mondo";
let risultato = stringa1 + " " + stringa2;
console.log(risultato); // Output: Ciao Mondo

// Template literals, servono per incorporare variabili all'interno di stringhe in modo piu semplice
let nomeUtente = "Luca";
let saluto = `Ciao, ${nomeUtente}! Benvenuto.`; // ` backtik e serve per le template literals
console.log(saluto); // Output: Ciao, Luca! Benvenuto.

let testo = "ciao sono una stringa";
let elemento = `<h1>${testo} bellissima</h1>`;

document.body.innerHTML = elemento;

console.log(elemento); // Output: <h1>ciao sono una stringa bellissima</h1>

// Lunghezza di una stringa

let frase = "Questa è una frase di esempio.";
console.log(frase.length); // Output: 26

// Come ottenere un carattere specifico in una stringa

let parola = "JavaScript";
console.log(parola[3]); // Output: a

// Per ottenere l'ultimo carattere di una stringa

console.log(parola[parola.length - 1]); // Output: t

// per ottenere l'inizio di una stringa

console.log(parola.slice(0, 4)); // Output: Java

// per ottenere la fine di una stringa

console.log(parola.slice(-6)); // Output: Script

// per ottenere una parte di stringa

console.log(parola.indexOf()); // Output: 4

// Array
let frutti = ["mela", "banana", "arancia"];
console.log(frutti[1]); // Output: banana [per accedere a un elemento specifico dell'array si usa l'indice tra parentesi quadre, partendo da 0]

console.log(frutti.length - 1); // Output: 3 [per ottenere la lunghezza dell'array si usa la proprietà length]
//console.log(data[0], data[1], data[2]); // Output: 2023 6 15 [per accedere agli elementi dell'array si usa l'indice tra parentesi quadre, partendo da 0]

// CICLO DI ARRAY
// ciclo for per scorrere tutti gli elementi dell'array
// i è un contatore che parte da 0 e arriva fino alla lunghezza dell'array meno 1

for (let i = 0; i < frutti.length; i++) {
  console.log(frutti[i]); // Output: mela banana arancia
}

// SPLIT

let città = "Roma, Milano, Napoli, Torino";
let cittàArray = città.split(", "); // Split divide una stringa in un array di sottostringhe in base a un separatore specificato in questo caso la virgola seguita da uno spazio
console.log(cittàArray); // Output: ["Roma", "Milano", "Napoli", "Torino"] // cittàArray si chiama così perchè cambio il valore da stringa a array

// JOIN

let cittàStringa = cittàArray.join(" - "); // Join unisce gli elementi di un array in una singola stringa, utilizzando un separatore specificato in questo caso " - "
console.log(cittàStringa); // Output: "Roma - Milano - Napoli - Torino"

// PUSH

let data = ["Milano", "Roma", "Napoli"];
data.push("Torino"); // Push aggiunge un nuovo elemento alla fine dell'array
console.log(data); // Output: ["Milano", "Roma", "Napoli", "Torino"]

// POP

data.pop(); // Pop rimuove l'ultimo elemento dell'array
console.log(data); // Output: ["Milano", "Roma", "Napoli"]

// SHIFT

data.shift(); // Shift rimuove il primo elemento dell'array
console.log(data); // Output: ["Roma", "Napoli"]

// UNSHIFT

data.unshift("Firenze"); // Unshift aggiunge un nuovo elemento all'inizio dell'array
console.log(data); // Output: ["Firenze", "Roma", "Napoli"]

//CONDIZIONI IF ELSE STATEMENTS

let nomeUtente1 = "Mario"; //è possibile utilizzare if anche senza else
let numbers = 25;

if (nomeUtente1 == "Mario") {
  console.log("Benvenuto Mario!");
} else {
  console.log("Utente non riconosciuto.");
}

if (nomeUtente1 == "Mario") {
  window.prompt("Benvenuto Mario!");
} else if (nomeUtente1 != "Mario") {
  window.alert("Utente non riconosciuto.");
}

//PROVA FUNZIONI

//FUNZIONE VOID (non fruttifera) è una funzione senza valore di ritorno
//la usiamo per scatenare un'azione ma non per restituire un valore

function sayMyName() {
  console.log("Ciao! Questa è una funzione void.");
}

sayMyName(); // Output: Ciao! Questa è una funzione void.

//Funzione con valore di ritorno

function torna5() {
  return 3 + 2;
}

console.log(torna5()); // Output: 5

function sum() {
  //funzione che fornisce un ritorno
  console.log("funzione sum eseguita"); // result è una funzione locale, visibile solo all'interno della funzione sum
  const result = 10 + 50;
  return result;
}

console.log(sum()); // Output: funzione sum eseguita 60. //funzione che ha un risoltato esportabile all'esterno della funzione stessa

const returnedValue = sum() + 10; //assegno il valore di ritorno della funzione a una variabile
console.log(returnedValue); // Output: 70

//FUNZIONE SOMMA

function somma() {
  return 10 + 20;
}

console.log(somma(10, 20)); // Output: 30

function somma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(somma(15, 25)); // Output: 40 //esempio con parametri variabili

// la funziona si invoca fuori dalle parentesi graffe

function sumWithParams(num1, num2) {
  const result = num1 + num2;
  return result;
}

console.log("risultato 1", sumWithParams(10, 5)); // Output: risultato 1 15
console.log("risultato 2", sumWithParams(20, 30)); // Output: risultato 2 50
console.log("risultato 3", sumWithParams()); // Output: risultato 3 NaN (Not a Number) perch non sono stati passati parametri
//se non passo parametri ottengo NaN (Not a Number) perch sto cercando di sommare due valori undefined
//QUI SI INVOCA LA FUNZIONE FUORI DALLE PARENTESI GRAFFE ✅

//ALTRI ESEMPI DI FUNZIONI BASE

function sayHi() {
  return "Ciao mi chiamo" + " " + name; // se non viene dato un valore di ritorno la funzione restituisce undefined
}

console.log(sayHi());

//FUNZIONI RANDOM serve per allinare valori casuali
//math.random() genera un numero casuale tra 0 e 1 anche con i decimali

function getRandomNumber() {
  const randomNum = Math.floor(Math.random() * 10); // genera un numero casuale tra 0 e 99
  return Math.random(); // Math.random() genera un numero casuale tra 0 e 1
}

//per avere diversi risultati posso richiamare piu volte la funzione
console.log(getRandomNumber(3)); // Output: numero casuale tra 0 e 1
console.log(getRandomNumber(5));

//Math.floor() arrotonda un numero per difetto

function getRandomInt(max) {
  return Math.floor(Math.random() * max); // genera un numero intero casuale tra 0 e max-1
}

console.log(getRandomNumber()); // Output: numero casuale tra 0 e 1
console.log(getRandomInt(10)); // Output: numero intero casuale tra 0 e 9

//Math.cell() arrotonda un numero per eccesso

function getRandomIntCeil(max) {
  return Math.ceil(Math.random() * max); // genera un numero intero casuale tra 1 e max
}

console.log(getRandomIntCeil(10)); // Output: numero intero casuale tra 1 e 10

///ESERCIZI///

function generationNumblist(limit) {
  const arraOfNum = [];

  for (let i = 0; i < limit; i++) {
    const generatedNum = getRandomInt(10);
    arraOfNum.push(generatedNum);
    arraOfNum.push(generatedNum); //non vedremo mail la funzione perchè non viene invocata attrarverso il suo nome
  }

  console.log(arraOfNum);
}

generationNumblist(5);

function generationNumblist(limit) {
  const arraOfNum = [];

  for (let i = 0; i < limit; i++) {
    const generatedNum = getRandomInt(10);
    arraOfNum.push(generatedNum);
    arraOfNum.push(generatedNum); //non vedremo mail la funzione perchè non viene invocata attrarverso il suo nome
  }

  return arraOfNum; //aggiungo il return per restituire l'array generato
}

const arroOfFiveNum = generationNumblist(5);
console.log("arroOfFiveNum", arroOfFiveNum);

const arroOfTenNum = generationNumblist(10);
console.log("arroOfTenNum", arroOfTenNum);
