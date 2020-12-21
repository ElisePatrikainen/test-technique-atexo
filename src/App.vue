<template>
  <button
    @click="mixGame()"
    data-test="mixGame">
    Mix game
  </button>
  <div>mixed game: 
    <game-cards></game-cards>
  </div>
  <cards-set ordered=false></cards-set>
  <button 
    @click="orderSet()"
    data-test="orderSet">
    Order set
  </button>
</template>

<script>
import GameCards from './components/GameCards.vue'

export default {
  components: { GameCards },
  name: 'App',
  computed: {
    // count () {
    //   return this.$store.state.mixedGame
    // }
  },
  methods: {
    mixGame() {
      this.$store.commit('mixGame')
    },
    orderSet() {
      this.$store.commit('orderSet')
    }
  },
  mounted() {
    // todo: to test
    this.$store.commit('mixGame')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
