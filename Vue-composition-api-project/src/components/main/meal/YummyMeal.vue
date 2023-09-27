<script setup>
import YummyMealPrice from '@/components/main/meal/YummyMealPrice.vue';

const props = defineProps({
    name: String,
    price: Number,
});

const emit = defineEmits(["addToCart"])
const addToCart = () => emit("addToCart", props.name);

</script>


<template>
    <p>
        <strong>{{ name }}</strong>
        <YummyMealPrice :price="price" />
        <button @click="addToCart" class="btn btn-add">Add to Cart</button>
    </p>
</template>

<style scoped>
.btn-add {
    background-color: var( --color-text);
    color: black;
}

.btn-add:hover {
    background-color: var(--vt-c-white-mute);
    transition: all 0.3s ease-in-out;
} 
</style>