<script>
import sourceData from '@/data.json'
import AppLink from './AppLink.vue';

export default {
    name: 'TheNavigation',
    data() {
        return {
            destinations: sourceData.destinations
        };
    },
    components: { AppLink }
}
</script>

<template>
    <nav id="nav">
        <AppLink id="logo" to="/">Travel APP</AppLink>
        <AppLink 
            v-for="destination in destinations"
            :key="destination.id"
            :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug }}"
        >
            <h2>{{ destination.name }}</h2>
        </AppLink>
        <AppLink :to="{name: 'protected'}">Dashboard</AppLink>
        <AppLink to="https://vueschool.io">Vue School</AppLink>
    </nav>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_variables.scss';

/* Navigation */
#nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-top: 0;
    padding: 1.875rem;
    background: $color-primary;
    color: $color-white;
    display: flex;
    align-items: center;
    border-bottom: .3125rem solid $color-secondary;
    z-index: 10;
}

#nav a {
    display: inline-block;
    margin-right: 20px;
    color: $color-white;
    transition: 0.2 ease color;
}

#nav a:hover {
    color: $color-secondary;
}
.active-link {
    border-bottom: 1px solid $color-secondary;
    color: $color-secondary;
}

#logo {
    font-weight: bold;
    font-size: 1.5rem;
    opacity: 1 !important;
}

</style>