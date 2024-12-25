<script setup>
defineProps({
  icon: {
    type: Array,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
    default: null,
  },
});
</script>

<template>
  <a
    :href="href"
    target="_blank"
  >
    <font-awesome-icon
      :icon="icon"
      size="3x"
    />
    <p>{{ text }}</p>
  </a>
</template>

<style scoped>
a {
  color: black;
}
</style>
