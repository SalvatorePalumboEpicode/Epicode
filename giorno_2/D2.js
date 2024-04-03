/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* 
let x = 5
let y = 9

if (x > y) {
  console.log('Il numero più grande è', x)
} else if (x < y) {
  console.log('Il numero più grande è', y)
} else {
  console.log('I numeri sono uguali')
}
 */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* let x1 = 9
if(x1 !== 5){
  console.log('not equal')
}; */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* let x2 = 10

if (x2 % 5 === 0) {
  console.log('divisibile per 5') */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*  x3 = 7
        y3 = 8
        if(x3 === 8 || y3 === 8 || x3-y3 === 8 || y3 - x3 === 8|| x3+y3 === 8){
            console.log('ok')
        };
 */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* x4 = 20
       y4 = 25
       z4 = 10
       costospedizione = 10
       if((x4+y4+z4)>= 50){
        console.log('spedizione gratuita')
       } else {
        console.log('costo di spedizione 10euro')
       }
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* var totale = 40
        var prezzoscontato = totale * 20/100
        var totale2 = totale-prezzoscontato
        if (totale > 50){
            
            console.log('spedizione gratuita')
            console.log(totale2)
        } else {
            console.log(totale2+10)
        } */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*  a = 10
        b = 20
        c = 30
        if(c>=a){
            console.log(c, a, b)
        } else {
            if(c>=b){
                console.log(c,b,a)
            }
           else{
            if(b>=a){
            console.log(b, a, c)
        } else {
            if(a>=b){
                console.log(a,b,c)
            }
        }
           } 
        } */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* 
      var valore = 123
       if (typeof valore === 'number'){
        console.log('il valore è un numero')
       } else {
        console.log('il valore non è un numero')
       } */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*      a1 = 6
       if(a1 % 2 === 0){
        console.log('questo numero è pari')
       } else {
        console.log('questo numero è dispari')
       } */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
      let val = 7
      if (val < 5) {
        console.log('Meno di 5')
      } else if (val < 10) {
        console.log('Meno di 10')
      } else {
        console.log('Uguale a 10 o maggiore')
      }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

  const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  }
  me.city = 'toronto'
  console.log(me)

/*  */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* delete me.lastName
    console.log(me); */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* me.skills.pop()
   console.log(me) */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* let array= []
    array.push(1)
    array.push(2)
    array.push(3)
    array.push(4)
    array.push(5)
    array.push(6)
    array.push(7)
    array.push(8)
    array.push(9)
    array.push(10)
    console.log(array) */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* array [9]=100
    console.log(array) */
