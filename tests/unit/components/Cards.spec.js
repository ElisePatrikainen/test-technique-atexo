import { shallowMount } from "@vue/test-utils";
import Cards from "@/components/Cards.vue";
import Card from "@/components/Card.vue";
import { orderedFullSet } from "../libs/data-samples";

describe("Game cards component", () => {
  it("displays all the mixed cards of the game", async () => {
    // todo: create a mixed full set sample
    const $store = {
      state: {
        mixedGame: orderedFullSet,
      },
    };

    const wrapper = shallowMount(Cards, {
      global: {
        mocks: {
          $store,
        },
      },
    });
    let cardComponents = wrapper.findAllComponents(Card);
    expect(cardComponents.length).toBe(
      wrapper.vm.$store.state.mixedGame.length
    );
    expect(cardComponents[0].vm.card).toBe(
      wrapper.vm.$store.state.mixedGame[0]
    );
  });
});
