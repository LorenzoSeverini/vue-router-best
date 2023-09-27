<script setup>
import { defineProps } from 'vue';

const props = defineProps ({
    cart: Array,
    currencySymbol: String,
    getConvertedPrice: Function,
    removeMeal: Function,
    totalCartPrice: Number,
})

</script>

<template>
    <div class="shopping-cart">
        <div class="cart-header">
            <h2>Shopping Cart</h2>
        </div>
        <ul>
            <li v-for="(meal, index) in cart" :key="index" class="cart-item">
                <div class="item-info">
                    <span class="item-name">{{ meal.name }}</span>
                    <span class="item-price">{{ getConvertedPrice(meal.price) }} {{ currencySymbol }}</span>
                </div>
                <button @click="removeMeal(index)" class="remove-button">Remove</button>
            </li>
        </ul>
        <div class="total-price">
            <p>Total price: {{ totalCartPrice.toFixed(2) }} {{ currencySymbol }}</p>
        </div>
    </div>
</template>

<style scoped>
.shopping-cart {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
}

.cart-header {
  text-align: center;
  margin-bottom: 1rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.item-info {
  display: flex;
  flex-direction: column;
}

.item-name {
  font-weight: bold;
}

.item-price {
  color: #666;
}

.remove-button {
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #cc0000;
}

.total-price {
  text-align: right;
  margin-top: 1rem;
  font-weight: bold;
}
</style>