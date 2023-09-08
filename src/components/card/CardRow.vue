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
    <div class="text">{{ text }}</div>
  </div>
</template>

<style scoped>
.card-row {
  .title {
    font-weight: bold;
    letter-spacing: 2px;
  }

  .text {
    color: #575757;
  }
}
</style>
