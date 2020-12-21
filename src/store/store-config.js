import * as cardsLib from "../libs/cards";

// todo: split mutations in an other file
const stateConfig = {
  state() {
    return {
      orderedGame: cardsLib.createCards(),
      mixedGame: null,
      userSet: null,
      orderedUserSet: null,
    };
  },
  mutations: {
    mixGame(state) {
      // todo: put 52 argument as optional
      state.orderedGame = cardsLib.createCards();
      state.mixedGame = cardsLib.createUnordonnedSet(52, state.orderedGame);
      state.userSet = null;
      state.orderedUserSet = null;
    },
    selectCard(state, card) {
      // todo: handle errors
      const selectedCard = state.mixedGame.find((c) => c === card);
      selectedCard.selected = true;
      if (state.userSet) {
        state.userSet.push(selectedCard);
      } else {
        state.userSet = [selectedCard];
      }
    },
    orderSet(state) {
      state.orderedUserSet = cardsLib.orderSet(state.userSet);
    },
  },
};

export default stateConfig;
