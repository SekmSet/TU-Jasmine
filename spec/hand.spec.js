import Hand from "../src/models/hand.js"

describe("Test hand", function () {
    // todo test for constructor

    it("Add Card : add card in the end of the deck success", function () {
        const config = {
            cards: [1,2,3],
            limit: 4
        }
        const hand = new Hand(config)
        const result = hand.addCard(4)

        expect(result).toBe(true);
    })

    it("Add Card : add card in the end of the deck fail", function () {
        const config = {
            cards: [1,2,3],
            limit: 3
        }
        const hand = new Hand(config)
        const result = hand.addCard(4)

        expect(result).toBe(false);
    })

    it("Remove card : remove card in the deck success", function () {
        const config = {
            cards:[1,2,3]
        }

        const hand = new Hand(config)
        const result = hand.removeCard(1)

        expect(result).toEqual(2);
    })

    it("Remove card : remove card in the deck fail", function () {
        const config = {
            cards:[1,2,3]
        }

        const hand = new Hand(config)
        const result = hand.removeCard(8)

        expect(result).toBe(false);
    })

    it("Get all card : get all cards of the deck", function () {
        const config = {
            cards:[1,2,3]
        }

        const hand = new Hand(config)
        const result = hand.getAllCards()

        expect(result).toEqual([1,2,3]);
    })

    it("Get cards count : count the cards number of the deck", function () {
        const config = {
            cards:[1,2,3]
        }

        const hand = new Hand(config)
        const result = hand.getCardsCount()

        expect(result).toEqual(3);
    })
})