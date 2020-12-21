<template>
<div class="container">
    <div v-if="!card.selected" data-test="cardsBack" class="cards-back" @click="selectCard()"></div>
    <div v-if="card.selected" data-test="cardsBack" class="cards-back">
        {{card.value + ' ' + card.color}}
    </div>
</div>
</template>

<script>
export default {
    name: 'Card',
    props: ['card'],
    methods: {
        selectCard() {
            this.$store.commit('selectCard', this.card)
        }
    }
}
</script>

<style scoped>

.container {
    border: 1px solid black;
    height: 100px;
    width: 50px;
    margin: 10px
}

.cards-back {
    cursor: pointer;
    height: 100%;
    width: 100%;
}

</style>