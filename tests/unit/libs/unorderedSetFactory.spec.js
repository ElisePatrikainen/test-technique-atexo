import { pickIntegers, pickCards } from '../../../src/libs/unorderedSetFactory'
import { orderedFullSet } from './data-samples';

describe('Create an unordered list of unique integers representing the cards index to pick', () => {
    
    it('creates a set of 10 unique integers among 52', () => {
        const integersList = pickIntegers(10, 52)
        integersList.forEach(integer => {
            const integerOccurences = integersList.filter(i => i === integer)
            expect(integerOccurences.length).toBe(1)
        });
    })
    
    it('creates a set of 52 unique integers among 52', () => {
        const integersList = pickIntegers(52, 52)
        integersList.forEach(integer => {
            const integerOccurences = integersList.filter(i => i === integer)
            expect(integerOccurences.length).toBe(1)
        });
    })

    // test that the list is 'unordered': stochastically / statistically ?
})

describe('Create a card set with card indexes matching an integer list', () => {
    it('creates a set of 10 unordered cards', () => {
        const integersList = [18, 0, 2, 39, 42, 7, 25, 4, 11, 29]
        const cardSet = pickCards(integersList, orderedFullSet)
        console.log(cardSet)
        expect(cardSet.length).toBe(10)
        const diamondAceCard = cardSet[1]
        expect(diamondAceCard.color).toBe('carreau')
        expect(diamondAceCard.value).toBe('as')
    })
})
