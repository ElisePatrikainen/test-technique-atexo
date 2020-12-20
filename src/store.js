import { createCards } from "./libs/cardsFactory"
import { createUnordonnedSet } from "./libs/unorderedSetFactory"
import { orderSet } from "./libs/orderCards"

export const store = {
    cards: null,
    unorderedCardsSet: null,
    orderedCardsSet: null,
    cardsSetLength: 10,
    init() {
        this.cards = createCards()
        this.unorderedCardsSet = null
        this.orderedCardsSet = null
    },
    createNewUnorderedCardsSet() {
        this.orderedCardsSet = null
        this.unorderedCardsSet = createUnordonnedSet(this.cardsSetLength, this.cards)
    },
    orderCurrentCardsSet() {
        // todo: if ? try catch?
        this.orderedCardsSet = orderSet(this.unorderedCardsSet)
    }
}