<template>
  <cards></cards>
  <div>
    <button 
      @click="orderSet()"
      data-test="orderSet">
      Order set
    </button>
    <button
      @click="mixGame()"
      data-test="mixGame">
      Remix game
    </button>
  </div>
  <cards userSet=true></cards>
  <cards userSet=true ordered=true></cards>
</template>

<script>
import Cards from './components/Cards.vue'

export default {
  components: { Cards },
  name: 'App',
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
