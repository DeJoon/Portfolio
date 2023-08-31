<script setup>

</script>

<template>
  <div class="card container">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid var(--color-border);
  border-radius: 8px;

  :slotted(*) {
    border-bottom: 1px solid var(--color-border);
  }

  :slotted(*:last-child) {
    border-bottom: unset;
  }
}
</style>
