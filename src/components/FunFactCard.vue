<script setup>
defineProps({
  icon: {
    type: Array,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-12"><font-awesome-icon :icon="icon" size="3x" /></div>
      <div class="col-12 my-2 fw-bold fs-1">{{ amount }}</div>
      <div class="col-12 fw-bold">{{ text }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>
