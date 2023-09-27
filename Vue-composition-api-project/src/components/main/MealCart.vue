<script setup>
import YummyMeal from '@/components/main/meal/YummyMeal.vue';
import ShoppingCart from '@/components/main/meal/ShoppingCart.vue';
import { ref, reactive, provide, computed} from 'vue'

// exchange rates for different currencies
const exchangeRates = {
  '€': 1,     // Euro (default rate)
  '$': 1.2,   // Dollars
  '£': 0.9,   // Pound
};

const currencySymbol = ref("€");
const cart = reactive([])
const meals= reactive([
  { name: "Hamburger 505 🍔", price: 7.50, description:"Home-Made tipical 505 burger"},
  { name:"Cheese Burger 🧀", price: 5.50, description:""},
  { name:"Double Cheese Burger 🧀🧀", price: 5.90, description:""},
  { name:"Vegetarian Burger 🥕", price: 5.00, description:""},
  { name:"Vegan Burger 🍅", price: 6.5, description:""},
]);

// Function to calculate the converted price
const getConvertedPrice = (price) => {
  const exchangeRate = exchangeRates[currencySymbol.value];
  const convertedPrice = price * exchangeRate;
  return convertedPrice;
};

const placeOrder = () => {
    alert("Your order has been placed!");
    cart.splice(0, cart.length);
};
const addMealToCart = (mealName) => cart.push(meals.find((meal) => meal.name === mealName));
const removeMealFromCart = (index) => cart.splice(index, 1);
const totalCartPrice = computed(() => {
    return cart.reduce((total, meal) => total + parseFloat(getConvertedPrice(meal.price)), 0);
});

provide("currencySymbol", currencySymbol)

</script>

<template>
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
        :description="meal.description"
        :price="getConvertedPrice(meal.price)"
        @addToCart="addMealToCart"
        class="meal"
      />
    </div>

    <!-- ShoppingCart Component -->
    <ShoppingCart
        v-if="cart.length > 0"
        :cart="cart"
        :currencySymbol="currencySymbol"
        :getConvertedPrice="getConvertedPrice"
        :removeMeal="removeMealFromCart"
        :totalCartPrice="totalCartPrice"
    />

    <div v-else>
        Shopping cart is empty!
        <br>
        Add Something delicious 🍔
    </div>

    <!-- button -->
    <div class="btn-container">
      <button @click="placeOrder" class="btn green">Place order 🤠</button>
    </div>
</template>

<style scoped>
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
  overflow: auto;
  scroll-behavior: smooth;
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
</style>