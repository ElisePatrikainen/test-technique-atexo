import { shallowMount } from "@vue/test-utils"
import { Card } from "@/components/Card.vue"

describe("Card.vue", () => {
    it('displays first the back of the card', () => {
        const wrapper = shallowMount(Card)
        // todo: find better names
        const cardsBackDisplayed = !!wrapper.find('[data-test]="cardsBack"')
        expect(cardsBackDisplayed).toBeTruthy
        const cardsFrontDisplayed = !!wrapper.find('[data-test]="cardsFront"')
        expect(cardsFrontDisplayed).toBeFalsy

    })
})