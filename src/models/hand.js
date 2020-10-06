
export default class Hand {
    constructor (config) {

        if (!(config.cards instanceof Array)) {
            throw new Error('cards is not an array')
        }

        if (config.limit === undefined) {
            config.limit = 7
        }

        if (!Number.isInteger(config.limit)) {
            throw new Error('limit is not an integer')
        }

        this.limit = config.limit
        this.cards = config.cards
    }

    addCard(card){
        if(this.cards.length < this.limit){
            this.cards.push(card)
            return true
        } else {
            return false
        }
    }

    removeCard(position){
        if (!this.cards.hasOwnProperty(position)) {
            return false
        }
        const removeCard = this.cards[position]
        this.cards = this.cards.filter((card, index) => index !== position)
        return removeCard
    }

    getAllCards(){
        return this.cards
    }

    getCardsCount(){
        return this.cards.length
    }
}