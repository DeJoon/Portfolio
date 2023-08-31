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
  <div class="row">
    <div class="col">{{ title }}</div>
    <div class="col">{{ text }}</div>
  </div>

</template>

<style scoped>
.row {
  padding-top: .5em;
  padding-bottom: .5em;
}
</style>
