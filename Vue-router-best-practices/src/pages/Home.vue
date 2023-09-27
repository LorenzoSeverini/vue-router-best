<script>
import sourceData from '@/data.json'

export default {
  name: 'Home',
  data () {
    return {
      destinations: sourceData.destinations
    }
  },

  methods: {
  
    // Function to add dynamic route to the router 
    // -------------------
    addDynamicRoute() {
      this.$router.addRoute({
        name: 'dynamic',
        path: '/dynamic',
        component: () => import('@/pages/Login.vue')
      })
      
      // Function to remove dynamic route from the router
      // -------------------
      // this.$router.removeRoute('dynamic')
    }


      
  }
}
</script>

<template>
  <div class="home">
    <h1>All Destination</h1>

    <!-- add dynamic route -->
    <button @click="addDynamicRoute">Add dynamic route</button>
    <router-link to="/dynamic">Visit Dynamic Route</router-link>

    <div class="destinations">
      <AppLink 
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug }}"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`images/${destination.image}`" alt="destination.name">
      </AppLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>

/* Home */
.home img {
  max-width: 14.375rem;
}
.home .destinations {
  display: flex;
  justify-content: space-between;
}
</style>
