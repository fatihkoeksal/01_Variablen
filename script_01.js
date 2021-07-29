/***** Variablen 01 *******/

// Zeilen-Kommentar

/**
 *  Block -Kommentar
 *  
 */

// 01 Ausgabe
// console.log("Hallo Welt!");
// console.log(firstName); // nicht deklarierte Var. --> Fehler

// 02 Deklaration + Wertzuweisung I 

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze"; // Deklaration + Wertzuweisung
// console.log(familyName); // Ausgabe
// console.log(firstName + " " + familyName); // Ausgabe

// 03 Deklaration + Wertzuweisung II 

// let firstName,familyName;
// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Namen eingeben:");
// console.log(firstName); // Ausgabe
// console.log(familyName); // Ausgabe
// console.log("Hallo " + firstName  + " " + familyName +"!"); // Ausgabe

// JS ist eine untypisierte Sprache! | untyped

// let test; // Deklaration (Definition)
// test = "hi"; // string 
// test = 2; // number
// test = true; // boolean

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** Variablen 02 *******/

// // Deklaration 
// let ageJohn, ageMark;
// let birthYearJohn, birthYearMark;

// // Wertzuweisung | Assignment

// let date = new Date();
// console.log("date: " + date.getFullYear());
// let year = date.getFullYear();
// ageJohn = 25; 
// ageMark = 30;

// //Operation (Differenz)
// birthYearJohn = year - ageJohn;
// birthYearMark = year - ageMark;

// console.log("birthYearJohn: " +  birthYearJohn);
// console.log("birthYearMark: " + birthYearMark);

/***** Variablen 03 *******/

const ageJohn = 35; // Variable mit KONSTANTEM Inhalt
const ageMark = 30;

// Operation (Vergleich/Test)
let isJohnOlder = (ageJohn > ageMark);
console.log("isJohnOlder: " + isJohnOlder);