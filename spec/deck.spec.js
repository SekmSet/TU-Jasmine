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

        if (JSON.stringify(deck.cards) !== JSON.stringify([1,2,3])) {
            expect(result).toBe(true);
        } else {
            expect(result).toBe(false);
        }
    })

    it("insertAt : add new card in the deck", function() {
        const config = {
            cards: [1,2,3]
        }

        const deck = new Deck(config)
        deck.insertAt(4, 2)
        expect(deck.cards).toEqual([1,2,4,3]);
    })

    it("draw : take and remove the deck first card", function () {
        const config = {
            cards: [1,2,3]
        };

        const deck = new Deck(config);
        const result = deck.draw();
        expect(result).toEqual(1);
        expect(deck.cards).toEqual( [2,3]);
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