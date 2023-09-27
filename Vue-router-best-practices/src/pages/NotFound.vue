<script>

</script>

<template>
    <div class="not-found">
        <h1>Not Found</h1>
        <p>Sorry, we couldn't find what you were looking for.</p>

        <AppLink to="/">Go Home</AppLink>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/variables.scss';
.not-found {
    text-align: center;
    margin-top: 20px;

    h1 {
        font-size: 2em;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.2em;
        margin-bottom: 10px;
    }

    a {
        font-size: 1.2em;
        color: $color-primary;
    }

    a:hover {
        color: $color-black;
    }

}
</style>