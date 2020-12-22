import * as cardsLib from "../libs/cards";

// todo: split mutations in an other file
const stateConfig = {
  state() {
    return {
      orderedGame: null,
      colors: ['Carreau', 'Coeur', 'Pique', 'Trèfle'],
      cardValues: ['As', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Valet', 'Dame', 'Roi'],
      mixedGame: null,
      mixedColors: null,
      mixedCardValues: null,
      userSet: null,
      orderedUserSet: null,
    };


  },
  mutations: {
    mixGame(state) {
      // todo: put 52 argument as optional
      state.mixedColors = cardsLib.createUnordonnedSet(state.colors);
      state.mixedCardValues = cardsLib.createUnordonnedSet(state.cardValues);
      state.orderedGame = cardsLib.createCards(state.mixedColors, state.mixedCardValues);
      state.mixedGame = cardsLib.createUnordonnedSet(state.orderedGame);
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
