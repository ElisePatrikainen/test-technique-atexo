<template>
  <button
    @click="createANewSet()"
    data-test="newSetButton">
  </button>
  <cards-set ordered=false></cards-set>
  <button 
    @click="orderCurrentCardsSet()"
    data-test="orderSetButton">
  </button>
  <cards-set></cards-set>
</template>

<script>
import CardsSet from './components/CardsSet.vue'
import { store } from './store'

export default {
  components: { CardsSet },
  name: 'App',
  methods: {
    createANewSet() {
      store.createNewUnorderedCardsSet()
    },
    orderCurrentCardsSet() {
      store.orderCurrentCardsSet()
    }
  },
  mounted() {
    store.init()
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
