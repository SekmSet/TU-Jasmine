
export default class Deck {
    constructor (config) {
        if (!(config.cards instanceof Array)) {
            throw new Error('cars is not an array')
        }

        this.cards = config.cards
    }

    shuffle () {
        const array = this.cards
        const arrayCopy = array.slice()
        this.shuffleArray(array)
        console.log(array, arrayCopy)
        return JSON.stringify(array) !== JSON.stringify(arrayCopy);
    }

    shuffleArray(a) {
        let j, x, i

        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    insertAt (card, position) {
        this.cards.splice(position, 0, card)
    }

    draw(){
        // const firstCard = this.cards.shift()
        return this.cards.shift()
    }

    getCardsCount () {
        console.log(this.cards)
        return this.cards.length
    }
}