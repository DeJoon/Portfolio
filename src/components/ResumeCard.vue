<script setup>
defineProps({
  from: {
    type: String
  },
  until: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container mt-3">
    <div class="row align-items-center text-center">
      <div class="col-3 line"></div>
      <div class="col-6">{{ until }}</div>
      <div class="col-3 line"></div>
    </div>
  </div>
  <div class="resume-card mt-3">
    <h3>{{ name }}</h3>
    <div class="header-subtitle mb-2">{{location}}</div>
    <div class="text-start">
      <slot />
    </div>
  </div>
  <div v-if="from" class="container mt-3">
    <div class="row align-items-center text-center">
      <div class="col-3 line"></div>
      <div class="col-6">{{ from }}</div>
      <div class="col-3 line"></div>
    </div>
  </div>
</template>

<style scoped>
.header-subtitle {
  font-size: .75rem;
}

.resume-card {
  border: 1px solid;
  border-radius: 10px;
  padding: 1rem;
}

.line {
  border: 1px solid;
}
</style>