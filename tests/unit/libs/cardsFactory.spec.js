import { createCard, createCards } from '@/libs/cardsFactory.js'

describe('create a card', () => {
    it('creates a number card', () => {
        const card = createCard('carreau', 3)
        expect(card).toHaveProperty('color', 'carreau')
        expect(card).toHaveProperty('value', 4)
        expect(card).toHaveProperty('selected', false)
    })
    it('creates a figure card', () => {
        const figureCard = createCard('pique', 10)
        expect(figureCard).toHaveProperty('color', 'pique')
        expect(figureCard).toHaveProperty('value', 'valet')
        expect(figureCard).toHaveProperty('selected', false)
    })
})


describe('it should create a cards set, and add a set index to each card', () => {
    // todo: split in several 'it'
    it('creates a number card', () => {
        const cards = createCards()
        expect(cards.length).toBe(52)
        expect(cards[17]).toHaveProperty('index', 17)
        const diamondCards = cards.filter(card => card.color === 'carreau')
        expect(diamondCards.length).toBe(13)
        const kingCards = cards.filter(card => card.value === 'roi')
        expect(kingCards.length).toBe(4)
    })
})