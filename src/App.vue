<template>
  <cards></cards>
  <div>
    <button @click="orderSet()" data-test="orderSet">Order set</button>
    <button @click="mixGame()" data-test="mixGame">Remix game</button>
  </div>
  <div>Orders: 
    <span>cards: {{cardsValuesOrder}}</span>
    <span>cards: {{colorsOrder}}</span>
  </div>
  <cards userSet="true"></cards>
  <cards userSet="true" ordered="true"></cards>
</template>

<script>
import Cards from "./components/Cards.vue";

const reduceOrdersToString = (mixedValues) => mixedValues ? mixedValues.reduce((stg, value) => stg + " " + value, "") : "No order defined yet."

export default {
  components: { Cards },
  name: "App",
  computed: {
    cardsValuesOrder() {
      return reduceOrdersToString(this.$store.state.mixedCardValues)
    },
    colorsOrder() {
      return reduceOrdersToString(this.$store.state.mixedColors)
    }
  },
  methods: {
    mixGame() {
      this.$store.commit("mixGame");
    },
    orderSet() {
      this.$store.commit("orderSet");
    },
  },
  mounted() {
    // todo: to test
    this.$store.commit("mixGame");
  },
};
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
