import * as cards from '../libs'

// todo: split among files
const stateConfig = {
  state () {
    return {
        orderedGame: cards.createCards(),
        mixedGame: null,
        userSet: null,
        orderedUserSet: null
    }
  },
  mutations: {
    mixGame(state) {
        // todo: put 52 as optional
        state.orderedGame = cards.createCards()
        state.mixedGame = cards.createUnordonnedSet(52, state.orderedGame)
        state.userSet = null
        state.orderedUserSet = null
    },
    selectCard(state, card) {
        // todo: handle errors
        const selectedCard = state.mixedGame.find(c => c === card)
        selectedCard.selected = true
        if (state.userSet) {
            state.userSet.push(selectedCard)
        } else {
            state.userSet = [selectedCard]
        }
    },
    orderSet(state) {
        state.orderedUserSet = cards.orderSet(state.userSet)
    }
  }
}

export default stateConfig
