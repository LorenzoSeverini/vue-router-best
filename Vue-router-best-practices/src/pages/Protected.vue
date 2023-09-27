<script>
export default {
    name: 'Protected',

    data() {
        return {
            username: window.user
        }
    },

    methods: {
        logout() {

            // window.user = null
            // this.$router.push({ name: 'home', })

            // .push if you want to go back to the previous page (history)
            // .replace if you want to replace the current page (no history)
            // this.$router.push({ name: 'home', query: { logout: null } })

            this.$router.replace({ name: 'home', query: { logout: null } })
        }
    }
}
</script>

<template>
    <section class="home">
        <h1>Welcome 🤠! {{ username}}</h1>
        <button @click="logout" class="btn">Logout</button>
        <AppLink :to="{ name: 'invoices'}">
            <button class="btn">Invoices</button>
        </AppLink>
    </section>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_variables.scss';

.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
.btn {
    background-color: $color-secondary;
    color: $color-white;
    padding: .625rem 1.25rem;
    border-radius: .3125rem;
    border: none;
    cursor: pointer;
    transition: 0.2s ease background-color;
}
</style>