<script setup>

</script>

<template>
  <div class="card-box py-3">
    <slot />
  </div>
</template>

<style scoped>
:slotted(div) {
  padding-bottom: .5rem;
}
</style>
