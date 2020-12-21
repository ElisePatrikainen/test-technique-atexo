import { orderSet } from "../../../src/libs/cards/orderCards"
import { unorderedSet } from "./data-samples"

describe('[Cards lib] orderSet function ', () => {
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