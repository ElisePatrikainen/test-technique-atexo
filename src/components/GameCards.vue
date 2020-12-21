<template>
  <card v-for="card in cards" :key="card.index" :card="card"></card>
</template>

<script>
import Card from './Card.vue'
export default {
  components: { Card },
    name: 'GameCards',
    computed: {
        cards() {
            return this.$store.state.mixedGame
        }
    }

}
</script>

<style>

</style>Card