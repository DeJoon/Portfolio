<script setup>
import {useSlots} from "vue";

defineProps({
  title: {
    type: String,
    required: true
  }
})

const showIcons = undefined !== useSlots().icons
const uuid = crypto.randomUUID().toString()
</script>

<template>
  <div class="container experience-box">
    <div class="row align-items-center justify-content-between" data-bs-toggle="collapse" :data-bs-target="'#' + uuid" aria-expanded="false" :aria-controls="uuid">
      <h4 class="col-10">{{ title }}</h4>
      <font-awesome-icon :icon="['fas', 'angle-down']" class="col-1 mt-2" />
    </div>

    <div v-if="showIcons" class="row py-3 icons">
      <slot name="icons" />
    </div>

    <div class="row collapse" :id="uuid">
      <div class="col card card-body">
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
