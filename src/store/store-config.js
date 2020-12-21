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
        state.mixedGame = cards.createUnordonnedSet(52, state.orderedGame)
    },
    selectCard(state, index) {
        // todo: handle errors
        const selectedCard = state.mixedGame[index]
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
