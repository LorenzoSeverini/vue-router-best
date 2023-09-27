<script>

</script>

<template>
    <span class="go-back">
        <button @click="$router.back()">Go Back</button>
    </span>
</template>

<style lang="scss" scoped>
@import '../styles/partials/variables.scss';

.go-back {
    display: inline-block;
    margin: 1.25rem auto;

    button {
        background-color: $color-white;
        border: 1px solid $color-black;
        border-radius: 4px;
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
            background-color: $color-black;
            color: $color-white;
        }
    }
}
</style>