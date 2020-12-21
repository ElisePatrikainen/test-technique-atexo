import { createStore } from "vuex";
import storeConfig from "../../../src/store/store-config";

// todo: isolate the store by mocking the 'cards' dependency
// these tests are currently more 'integration oriented', because they test the result in a whole (including
// the behaviour of the 'cards' dependency, which already have unit tests)

describe("store", () => {
  it("has a full ordered game on initialisation", () => {
    const store = createStore(storeConfig);
    expect(store.state.orderedGame.length).toBe(52);
  }),
    it("mix the game", () => {
      const store = createStore(storeConfig);
      expect(store.state.mixedGame).toBeNull();
      store.commit("mixGame");
      const mixedGame1 = store.state.mixedGame;
      expect(mixedGame1.length).toBe(52);
      store.commit("mixGame");
      // mock dependency and just test that the relevant dependency method has been called and
      // that its output has been correctly used in the store
      expect(mixedGame1 === store.state.mixedGame).toBeFalsy();
    }),
    it("selects a card from the game and 1. adds it to the set 2. mark this card as selected", () => {
      // todo: preset the store here
      const store = createStore(storeConfig);
      store.commit("mixGame");
      expect(store.state.userSet).toBeNull();
      const selectedCard = store.state.mixedGame[5];
      expect(selectedCard.selected).toBeFalsy;
      store.commit("selectCard", selectedCard);
      // mock dependency and just test that the relevant dependency method has been called and
      // that its output has been correctly used in the store
      const userSet = store.state.userSet;
      expect(userSet.length).toBe(1);
      expect(userSet[0]).toBe(selectedCard);
      expect(selectedCard.selected).toBeTruthy;
    }),
    it("orders the current set", () => {
      const store = createStore(storeConfig);
      store.commit("mixGame");
      store.commit("selectCard", store.state.mixedGame[5]);
      store.commit("selectCard", store.state.mixedGame[2]);
      store.commit("selectCard", store.state.mixedGame[12]);
      expect(store.state.orderedUserSet).toBeNull();
      store.commit("orderSet");
      // mock dependency and just test that the relevant dependency method has been called and
      // that its output has been correctly used in the store
      expect(store.state.orderedUserSet.length).toBe(3);
    });
});
