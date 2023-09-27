<script>
import { RouterLink } from 'vue-router'

export default {
    props: {
        ...RouterLink.props,
    },

    computed: {
        isExternal () {
            return typeof this.to === 'string' && this.to.startsWith('http')
        }
    }
}
</script>

<template>
    
    <a 
        v-if="isExternal" 
        :href="to"
        target="_blank"
        rel="noopener noreferrer"
        class="external-link"
    >
        <slot></slot>
    </a>

    <router-link v-else v-bind="$props" class="internal-link">
        <slot></slot>
    </router-link>

</template>

<style lang="scss" scoped>
@import '../styles/partials/_variables.scss';

.external-link {
    color: $color-secondary;
    text-decoration: none;
    transition: 0.2s ease color;
}

.external-link:hover {
    color: $color-primary;
}
</style>