<script setup>
import { ref, computed } from 'vue'

const name = ref("The Burger 505");

// get year 
// -------------
const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
}
const currentYear = computed(() => getCurrentYear());
// ------------

</script>

<template>
    <p>&copy; {{ currentYear }} {{ name }}. All rights are reserved</p>
</template>

<style scoped>

</style>