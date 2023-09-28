<script setup>
import { computed, inject } from 'vue';

const props = defineProps ({
    price: Number,
})

const currencySymbol = inject('currencySymbol');
const pricePretty = computed(
    () => `${props.price.toFixed(2)} ${currencySymbol.value}`
);

</script>

<template>
    <span><strong>Price:</strong> {{ pricePretty }} </span>
</template>

<style scoped></style>