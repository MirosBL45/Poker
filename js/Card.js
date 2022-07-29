//jedna karta
/**
 * JavaScript Classes are templates for JavaScript Objects.
 * U smislu pravis novi Object i pravis sablon za njega,
 * sta sve on ima i koje metode (funkcionalnosti) ima
 * 
 * pravimo novi data type unutar projekta, kao sto ima type
 * number ili string, tako mi ovde pravimo novi tip koji nama
 * odgovara u ovom slucaju. Svaki data type treba da ima istu
 * funkcionlanost. Kao sto se brojevi sabiraju, tako ovaj ovde
 * data type treba da ima svoju funkcionlanost i da ima svoje
 * metode koje se na njemu uvek mogu upotrebljavati
*/
class Card {
    //sta ta karta treba da ima, znak i vrednost
    constructor(sign, value) {
        this.sign = sign;
        this.value = value;
    }

    getCard() {
        return this.sign + this.value;
    }
}

//Ova dva dole su za probu
//jedan objekat, novi taj Card objekat
let card = new Card('clubs', 5);
console.log(card);
//clubs-tref, spades-pik, hearts-srce, diamonds-karo

//Ovde je niz vise objekata, od tog novog Card objekta
let sveKarte = [
    new Card('srce', 9),
    new Card('herc', 5),
    new Card('herc', 3)
];
console.log(sveKarte);

//Ovde ga radim
let cardsAll = [];

let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "ace", "jack", "queen", "king"];
let cardSigns = ["clubs", "diamonds", "hearts", "spades"];

cardSigns.forEach(znak => {
    cardValues.forEach(vrednost => {
        cardsAll.push(new Card(znak, vrednost))
    });
});

console.log(cardsAll);

console.log(cardsAll[3].getCard());