<script setup>
import { ref, reactive } from 'vue'

const state = reactive({count: 0})

const increment = () => {
  state.count++
}

const msg = ref('Hello Vue!')

</script>

<template>
  <div class="about">
    <h1>{{ state.count }}</h1>
    <button @click="increment">
      Increment count
    </button>
  </div>
</template>

<style scoped>

</style>
