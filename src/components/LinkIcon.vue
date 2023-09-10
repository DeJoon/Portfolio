<script setup>
defineProps({
  icon: {
    type: Array,
    required: true
  },
  href: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a :href="href" target="_blank"><font-awesome-icon :icon="icon" size="3x" /></a>
</template>

<style scoped>
a {
  color: black;
}
</style>
