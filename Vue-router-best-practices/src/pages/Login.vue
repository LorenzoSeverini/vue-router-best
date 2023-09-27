<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {

    // --------------
    // Composition API way
    setup() {
        const username = ref('')
        const password = ref('')
        const route = useRoute()
        const router = useRouter()

        const login = () => {
            window.user = username.value
            const redirectPath = route.query.redirect || '/protected'
            router.push(redirectPath)
        }
        return { username, password, login }



    },
    
    // --------------
    // Option API way

    // data () {
    //     return {
    //         username: '',
    //         password: ''
    //     }
    // },

    // methods: {
    //     login () {
    //         // auth user against API

    //         // PRETENDING THE USER IS AUTHENTICATED
    //         window.user = this.username
    //         const redirectPath = this.$route.query.redirect || '/protected'
    //         this.$router.push(redirectPath)

    //     }
    // }
}

</script>

<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>
            <!-- username -->
            <label for="username">Username</label>
            <input v-model="username" name="username" type="text" class="input">
            <!-- password -->
            <label for="password">Password</label>
            <input v-model="password" name="password" type="password" class="input">
            <!-- submit -->
            <button class="btn" type="submit">Login</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/variables.scss';

/* Form */
.form{
    display:flex;
    flex-direction: column;
    max-width:25rem;
    margin: 0 auto;
}

.input{
    border: 1px solid $color-secondary;
    padding: 10px;
    margin-bottom:20px;
    border-radius:5px;
}

.btn{
    background-color: $color-secondary;
    color: $color-white;
    padding: 10px;
    border-radius: 5px;
    border:none;

    &:hover{
        cursor:pointer;
        background-color: $color-primary;
    }
}
</style>