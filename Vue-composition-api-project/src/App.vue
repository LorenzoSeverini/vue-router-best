<script setup>
import YummyMeal from './components/YummyMeal.vue';
import { ref, reactive, computed, provide } from 'vue'

// Hamburger
// -----------

// exchange rates for different currencies
const exchangeRates = {
  '€': 1,     // Euro (default rate)
  '$': 1.2,   // Dollars
  '£': 0.9,   // Pound
};

const currencySymbol = ref("€");

// Function to calculate the converted price
const getConvertedPrice = (price) => {
  const exchangeRate = exchangeRates[currencySymbol.value];
  return price * exchangeRate;
};

provide("currencySymbol", currencySymbol)
const name = ref("The Burger 505");
const cart = reactive([])
const meal = reactive({name: "Hamburger 300gr 🍔", price: 5});
const meals= reactive([
  { name: "Hamburger 505 🍔", price: 7.50, description:"Home-Made tipical 505 burger"},
  { name:"Cheese Burger 🧀", price: 5.50, description:""},
  { name:"Double Cheese Burger 🧀🧀", price: 5.90, description:""},
  { name:"Vegetarian Burger 🥕", price: 5.00, description:""},
  { name:"Vegan Burger 🍅", price: 6.5, description:""},
])
const placeOrder = () => alert("You're order has been placed!");
const addItemToCart = (item) => cart.push(item);
// ----------

// get year 
// -------------
const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
}
const currentYear = computed(() => getCurrentYear());
// ------------


// 2 ways to use composition api <script setup> or 
// using this below 

// export default {
  // import YummyMeal from './components/YummyMeal.vue';
  // components: {YummyMeal},
  // setup () {
  //   return { 
  //     name, 
  //     placeOrder, 
  //     addItemToCart, 
  //     meal, 
  //     meals, 
  //     currentYear, 
  //     currencySymbol,
  //     getConvertedPrice,
  //   };
  // },
// }

</script>

<template>
  <!-- header -->
  <header>
    <h1>{{ name }}</h1>
  </header>

  <main>
    <!-- choose currency -->
    <div class="currency-container">
      <p>Choose your currency</p>
      <div class="currency-item">
        <label for="currencySymbol">Currency :</label>
        <select id="currencySymbol" v-model="currencySymbol">
          <option value="€">Euro (€)</option>
          <option value="$">Dollars ($)</option>
          <option value="£">Pound (£)</option>
        </select>
      </div>
    </div>
    
    <!-- List of meals -->
    <div class="meal-container">
      <YummyMeal 
        v-for="meal in meals" 
        :name="meal.name" 
        :price="getConvertedPrice(meal.price)"
        @addToCart="addItemToCart"
        class="meal"
      />
    </div>

    <!-- button -->
    <div class="btn-container">
      <button @click="placeOrder" class="btn green">Place order 🤠</button>
    </div>
  </main>

  <!-- footer -->
  <footer><p>&copy; {{ currentYear }} {{ name }}. All rights are reserved</p></footer>
</template>

<style scoped>

header {
  text-align: center;
  font-size: 1.5rem;
  height: 6.25rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

main {
  margin-top: 6.25rem;
  height: calc(100vh - 6.25rem - 3.125rem - 6.25rem);
  overflow: auto;
}

.currency-item {
  display: flex ;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
}
.meal-container {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.meal {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  text-align: center;
  height: 3.125rem;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: baseline;
}

@media (min-width: 50rem) {
  .meal {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    align-content: flex-start;
    justify-content: center;

  }
}
</style>
