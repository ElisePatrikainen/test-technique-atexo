<template>
  <div
    class="container"
    :class="card.selected ? '' : 'cards-back'"
    @click="card.selected ? '' : selectCard()"
  >
    <div v-if="card.selected" data-test="cardsFront" class="cards-front-inner">
      <span>{{ card.value }}</span>
      <span>{{ card.color }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["card"],
  methods: {
    selectCard() {
      this.$store.commit("selectCard", this.card);
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid black;
  height: 100px;
  width: 70px;
  margin: 10px;
}

.cards-back {
  cursor: pointer;
  background-color: pink;
}

.cards-front-inner {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>