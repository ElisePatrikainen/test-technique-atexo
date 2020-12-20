// check if in this pattern we should use vue as plugin

import { store } from '../../src/store'
import { orderedFullSet } from './libs/data-samples'

describe('store', () => {

    it('has correct initial configuration', () => {
        store.init()
        expect(store.cards).toEqual(orderedFullSet)
        expect(store).toHaveProperty('unorderedCardsSet', null)
        expect(store).toHaveProperty('orderedCardsSet', null)
        expect(store).toHaveProperty('cardsSetLength', 10)
    })
    // todo: check if here is good responsibility
    it('creates a new unordered set', () => {
        store.createNewUnorderedCardsSet()
        expect(store.unorderedCardsSet.length).toBe(store.cardsSetLength)
        expect(store.orderedCardsSet).toBe(null)
    })

    it('orders the current unordered set', () => {
        store.createNewUnorderedCardsSet()
        store.orderCurrentCardsSet()
        expect(store.orderedCardsSet.length).toBe(store.cardsSetLength)
    })
    // todo: case where there is no unordered set and we went to order? handle by component?

    it('when a new unordered set is created, replaces the older unordered set and removes the current ordered set ', () => {
        store.createNewUnorderedCardsSet()
        store.orderCurrentCardsSet()
        const olderSet = store.unorderedCardsSet
        store.createNewUnorderedCardsSet()
        expect(store.unorderedCardsSet !== olderSet).toBeTruthy
        expect(store.orderedCardsSet).toBe(null)
    })
})