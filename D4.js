/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const l1 = 4;
const l2 = 13;

function area(l1, l2) {
  return l1 * l2;
}

let area1 = area(l1, l2);

console.log("Questa è l'area del rettangolo", area1);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const num1 = 37;
const num2 = 37;

function crazySum(l1, l2) {
  if (l1 !== l2) {
    return l1 + l2;
  } else {
    return (l1 + l2) * 3;
  }
}

let resto1 = crazySum(num1, num2);

console.log("Questo è il risultato dell'operazione:", resto1);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const num3 = 66;
const num4 = 19;

function crazyDiff(l1, l2) {
  if (num3 <= 19) {
    return Math.abs(num3 - num4);
  } else {
    return Math.abs((num3 - num4) * 3);
  }
}

let resto2 = crazyDiff(num3, num4);

console.log("Risultato:", resto2);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const n = Math.floor(Math.random() * 401);
console.log(n);

function boundary(l1) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

let resto3 = boundary(n);

console.log("L'operazione risulta:", resto3);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(inputString) {
  if (inputString.startsWith("EPICODE")) {
    return inputString;
  } else {
    return "EPICODE" + inputString;
  }
}
let risultato = epify("Grande Epicode");

console.log(risultato);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

let n1 = Math.floor(Math.random() * 101);
console.log(n1);

function check3and7(let1) {
  if (n1 % n1 === 0) {
    if (n1 % 3 === 0 || n1 % 7 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

let risultato2 = check3and7(n1);

console.log("Il risultato è:", risultato2);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const stringa = "EPICODE";
function reverseString(l1) {
  return stringa.split("").reverse().join("");
}
const risultato3 = reverseString(stringa);
console.log(risultato3);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const stringa2 = "tu non puoi passare";
function upperFirst(l1) {
  let r0 = stringa2.split(" ");
}

let risultato5 = upperFirst(stringa2);
console.log(risultato5);

// let risultato4 = upperFirst(stringa2);
// console.log(risultato4);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const stringa3 = "Ciao ciao mare";
function cutString(l1) {
  let s1 = stringa3.slice(1, 1);
  //   let s2 = s1.slice(14, 1);
  return s1;
}

let risultato6 = cutString(stringa3);
console.log(risultato6);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
