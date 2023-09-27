<script>
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from '@/components/TheNavigation.vue';
export default {
  name: 'App',

  components: {
    TheNavigation
  }
  
}
</script>

<template>
  <header>
    <TheNavigation />
  </header>

  <div class="container">

    <!-- left sidebar -->
    <router-view  v-slot="{ Component }" class="view left-sidebar" name="LeftSidebar">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>

    <!-- main -->
    <router-view v-slot="{ Component }" class="main-view">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </div>

</template>

<style lang="scss" scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.container {
  display: flex;

  .main-view {
    width: 100%;
  }

  .view {
    padding: 1rem;
  }

  .left-sidebar {
     width: 20%;
  }
}

</style>
