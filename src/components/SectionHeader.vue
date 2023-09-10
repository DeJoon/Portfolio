<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h2 class="mb-4 text-center">
    <span class="title">{{ title }}</span>
  </h2>
</template>

<style scoped>
.title {
  border-bottom: 1px solid;
  font-weight: bold;
  letter-spacing: .125rem;
}
</style>
