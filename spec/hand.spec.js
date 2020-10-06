import Hand from "../src/models/hand.js"

describe("Test hand", function () {
    it("Add Card : add card in the end of the deck", function () {
        const config = {
            cards:[1,2,3]
        }
        const hand = new Hand(config)
        const result = hand.addCard(4)
        console.log("result ", result)

        expect(result).toBe(true);
    })

    it("Remove card : remove card in the deck", function () {
        const config = {
            cards:[1,2,3]
        }
        const hand = new Hand(config)
        const result = hand.removeCard(1)
        console.log("result ", result)

        expect(result).toEqual(2);
    })

    it("Get all card : get all cards of the deck", function () {
        const config = {
            cards:[1,2,3]
        }

        const hand = new Hand(config)
        const result = hand.getAllCards()
        console.log("result ", result)

        expect(result).toEqual([1,2,3]);
    })

    it("Get cards count : count the cards number of the deck", function () {
        const config = {
            cards:[1,2,3]
        }

        const hand = new Hand(config)
        const result = hand.getCardsCount()
        console.log("result ", result)

        expect(result).toEqual(3);
    })
})