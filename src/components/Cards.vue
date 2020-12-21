<template>
  <div class="container">
    <card v-for="card in cards" :key="card.index" :card="card"></card>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  name: "Cards",
  props: ["userSet", "ordered"],
  computed: {
    cards() {
      if (this.userSet) {
        if (this.ordered) {
          return this.$store.state.orderedUserSet;
        } else {
          return this.$store.state.userSet;
        }
      }
      return this.$store.state.mixedGame;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>