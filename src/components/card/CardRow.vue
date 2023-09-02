<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card-row">
    <div class="title">{{ title }}</div>
    <div>{{ text }}</div>
  </div>
</template>

<style scoped>
.card-row {
  .title {
    font-weight: bold;
    letter-spacing: 2px;
  }
}
</style>
