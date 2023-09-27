<script>
export default {
    props: {
        name: String,
        price: Number,
    },

    setup(props, { emit }) {
       const addToCart = () => emit("addToCart", props.name);
       return { addToCart };
    }
}
</script>


<template>
    <p>
        <strong>{{ name }}</strong>
        {{ price }}
        <button @click="addToCart">Add to Cart</button>
    </p>
</template>

<style scoped></style>