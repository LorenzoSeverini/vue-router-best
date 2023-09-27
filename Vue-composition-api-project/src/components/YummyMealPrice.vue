<script setup>
import { computed, inject } from 'vue';

const props = defineProps ({
    price: Number,
})

const currencySymbol = inject('currencySymbol');
const pricePretty = computed(
    () => `${currencySymbol.value}${props.price.toFixed(2)}`
);

// export default {
// }
</script>

<template>
    <span>{{ pricePretty }}</span>
</template>

<style scoped></style>