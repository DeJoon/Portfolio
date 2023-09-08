<script setup>
import {useSlots} from "vue";

defineProps({
  title: {
    type: String,
    required: true
  }
})

const showIcons = undefined !== useSlots().icons
</script>

<template>
  <div class="container experience-box">
    <div class="row">
      <h4 class="col">{{ title }}</h4>
    </div>

    <div v-if="showIcons" class="row py-3 icons">
      <slot name="icons" />
    </div>

    <div class="row">
      <div class="col">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.icons {
  :slotted(*) {
    flex: 1 0 0;
  }
}
</style>
