<template>
<div class="container">
    <div v-if="!card.selected" data-test="cardsBack" class="inner cards-back" @click="selectCard()"></div>
    <div v-if="card.selected" data-test="cardsFront" class="inner cards-front">
        <span>{{card.value}}</span>
        <span>{{card.color}}</span>
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
    width: 70px;
    margin: 10px
}

.inner {
    height: 100%;
    width: 100%;
}

.cards-back {
    cursor: pointer;
    background-color: pink;
}

.cards-front {
    display: flex;
    flex-direction: column;
}

</style>