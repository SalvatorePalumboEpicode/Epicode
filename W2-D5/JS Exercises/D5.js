/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (i=0; i<pets.lenght; i++){
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/


pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
  console.log(pets);


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/


  const firstPet = pets.shift(); 
  pets.push(firstPet); 

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

const plateValue = 'ABC123'; 

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = plateValue;
}

console.log(cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: 'Toyota',
  model: 'Corolla',
  color: 'silver',
  trims: ['le', 'xle', 'se'],
};
cars.push(newCar);

cars.forEach((car) => {
  if (car.trims.length > 0) {
    car.trims.pop(); 
  }
});
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = cars.map(car => {
  if (car.trims.length > 0) {
    return car.trims[0]; 
  } else {
    return null; 
  }
});

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

cars.forEach((car) => {
  const firstLetter = car.color.charAt(0).toLowerCase();
  if (firstLetter === 'b') {
    console.log('Fizz'); 
  } else {
    console.log('Buzz'); 
}
});


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i=0;
while (i<numericArray && numericArray[i]!==32){
  console.log(numericArray[i]);
  i++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']


const alphabetPositions = [];

charactersArray.forEach(char => {
    switch (char) {
        case 'a':
            alphabetPositions.push(1);
            break;
        case 'b':
            alphabetPositions.push(2);
            break;
        case 'c':
            alphabetPositions.push(3);
            break;
        case 'd':
            alphabetPositions.push(4);
            break;
        case 'e':
            alphabetPositions.push(5);
            break;
        case 'f':
            alphabetPositions.push(6);
            break;
        case 'g':
            alphabetPositions.push(7);
            break;
        case 'h':
            alphabetPositions.push(8);
            break;
        case 'i':
            alphabetPositions.push(9);
            break;
        case 'l':
            alphabetPositions.push(10);
            break;
        case 'm':
            alphabetPositions.push(11);
            break;
        case 'n':
            alphabetPositions.push(12);
            break;
        case 'o':
            alphabetPositions.push(13);
            break;
        case 'p':
            alphabetPositions.push(14);
            break;
        case 'q':
            alphabetPositions.push(15);
            break;
        case 'r':
            alphabetPositions.push(16);
            break;
        case 's':
            alphabetPositions.push(17);
            break;
        case 't':
            alphabetPositions.push(18);
            break;
        case 'u':
            alphabetPositions.push(19);
            break;
        case 'v':
            alphabetPositions.push(20);
            break;
        case 'z':
            alphabetPositions.push(21);
            break;
        default:
            break;
    }
});

console.log(alphabetPositions);

