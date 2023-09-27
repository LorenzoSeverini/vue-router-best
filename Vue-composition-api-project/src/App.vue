<script>
import YummyMeal from './components/YummyMeal.vue';
import { ref } from 'vue'
// we can also used <script setup> 
export default {
  components: {YummyMeal},

  setup () {
    const name = ref("The Burger 505");
    console.log(name)
    const placeOrder = () => alert("You're order has been placed!");
    const addItemToCart = (item) => alert(`One ${item} is added to the cart!`)
    return { name, placeOrder, addItemToCart };

  }
}
</script>

<template>
  <header>
    <h1>{{ name }}</h1>
    <YummyMeal name="Hamburger 505 🍔" :price="5" @addToCart="addItemToCart"/>
    <button @click="placeOrder">Place order</button>
  </header>
</template>

<style scoped>

header {
  text-align: center;
  font-size: 1.5rem;
}

</style>
