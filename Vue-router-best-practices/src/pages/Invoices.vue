<script>
import { onBeforeRouteLeave } from 'vue-router'

export default {
    setup() {
        onBeforeRouteLeave((to, from) => {
            const answer = window.confirm(
                'Do you really want to leave? Invoices are super important!'
            )
            if (!answer) {
                return false
            }
        })
    }

}

</script>

<template>
    <h1>Invoices Page👍</h1>
</template>