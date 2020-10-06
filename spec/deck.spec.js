import Deck from "../src/models/deck.js"

describe("Test deck", function() {
    it("constructor : property is an object", function() {
        const config = {
            cards:[]
        }

        const result = new Deck(config)
        expect(result).toEqual(jasmine.any(Object));
    });

    it("constructor : property cards is defined", function() {
        const config = {
            cards: []
        }

        const result = new Deck(config)
        expect(result.cards instanceof Array).toBeTruthy();
    });

    it("constructor : property cards must be a array", function() {
        const config = {}

        expect(() => { new Deck(config) }).toThrowError("cars is not an array");
    });

    it("shuffle : the function return true if the deck is correctly shuffled", function() {
        const config = {
            cards : [1,2,3]
        }

        const deck = new Deck(config)
        const result = deck.shuffle()
        console.log("result ", result)
        // expect(result).toBe(true);
    })

    // it("shuffle : the function return false if the deck is not correctly shuffled", function() {
    //     const config = {
    //         cards: [1,2,3]
    //     }
    //
    //     const deck = new Deck(config)
    //     const result = deck.shuffle()
    //     expect(result).toBe(false);
    // })

    it("insertAt : add new card in the deck", function() {
        const config = {
            cards: [1,2,3]
        }

        const deck = new Deck(config)
        const result = deck.insertAt(4, 3)
        console.log("result ", result)
        expect(result).toEqual([1,2,3,4]);
    })

    it("draw : take and remove the deck first card", function () {
        const config = {
            cards: [1,2,3]
        }

        const deck = new Deck(config)
        const result = deck.draw()
        expect(result).toEqual(1);
    });

    it("getCardsCount : return the length of the deck", function() {
        const config = {
            cards: [1,2,3]
        }

        const deck = new Deck(config)
        const result = deck.getCardsCount()
        expect(result).toEqual(3);
    })
});