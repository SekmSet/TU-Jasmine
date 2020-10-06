
export default class Hand {
    constructor (config, limit = 7) {
        if (!(config.cards instanceof Array)) {
            throw new Error('cards is not an array')
        }

        if (!Number.isInteger(limit)) {
            throw new Error('limit is not an integer')
        }

        this.limit = limit
        this.cards = config.cards
    }

    addCard(card){
        console.log(this.cards)
        if(this.cards.length <= this.limit){
            this.cards.push(card)
            return true
        } else {
            return false
        }
    }

    removeCard(position){
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