<script>

</script>

<template>
    <ul>
        <li><router-link :to="{name: 'protected'}">Dashboard</router-link></li>
        <li><rotuer-link :to="{name: 'invoices'}">Invoices</rotuer-link></li>
    </ul>
</template>

<style lang="scss" scoped>
@import '../styles/partials/variables.scss';

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
        margin: 10px 0;
    }
}


</style>