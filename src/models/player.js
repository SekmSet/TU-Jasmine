import Pawn from "./pawn";
import ModelFactory from './factory';

export default class Player extends Pawn {

    constructor(config) {
        super(config.life, config.strength, config.def)

        this.type = config.type;
        this.deck = config.deck;
    }

    suffle(type){
        const arrayCopy = this.deck.slice()
        let j, x, i

        if(type === "deck"){
            for (i = this.deck.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = this.deck[i];
                this.deck[i] = this.deck[j];
                this.deck[j] = x;
            }
            return JSON.stringify(this.deck) !== JSON.stringify(arrayCopy);
        }
    }

    draw () {
        return this.deck.draw();
    }

    playCard(position){

    }

    discard(position){

    }

    // discard(position, target){
    //
    // }
}