//spil karata i podela 5 random karata za poker
class Deck {
    constructor(karte) {
        this.karte = karte;
        this.kopijaKarata = [].concat(this.karte);
    }

    fiveRandomCards() {
        let fiveRandomCards = [];

        if (this.karte.length < 6) {
            this.karte = [].concat(this.kopijaKarata);
        }

        for (let i = 0; i < 5; i++) {
            let rand = Math.floor(Math.random() * this.karte.length);
            fiveRandomCards.push(this.karte[rand]);
            this.karte.splice(rand, 1);
        }

        return fiveRandomCards;
    }
}

let deck = new Deck(cardsAll);
console.log(deck);