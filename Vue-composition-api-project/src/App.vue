<script setup>
import AppHeader from '@/components/header/AppHeader.vue';
import MealCart from '@/components/main/MealCart.vue';
import AppFooter from '@/components/footer/AppFooter.vue'

</script>

<template>
  <!-- header -->
  <header>
    <AppHeader />
  </header>

  <main>
    <MealCart />
  </main>

  <!-- footer -->
  <footer>
    <AppFooter />
  </footer>
</template>

<style scoped>
header {
  text-align: center;
  font-size: 1.5rem;
  height: 6.25rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

main {
  flex-grow: 1;
  margin: 6.25rem 0 3.125rem 0;
  padding-bottom: 3.125rem;
  height: calc(100vh - 6.25rem - 3.125rem );
}

footer {
  text-align: center;
  height: 3.125rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: baseline;
}
</style>
