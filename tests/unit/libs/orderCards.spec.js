import { orderSet } from "../../../src/libs/orderCards"
import { unorderedSet } from "./data"

describe('it should create a card ', () => {
    it('orders a set', () => {
        const orderedSet = orderSet(unorderedSet)
        orderedSet.forEach((card, index) => {
            if (orderedSet[index + 1]) {
                const nextCard = orderedSet[index + 1]
                expect(card.index).toBeLessThan(nextCard.index)
            }
        });
    })
})