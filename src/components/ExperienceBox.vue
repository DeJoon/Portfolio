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
      <h4 class="col-10 mb-0">{{ title }}</h4>
      <font-awesome-icon :icon="['fas', 'angle-down']" class="col-1" />
    </div>

    <div v-if="showIcons" class="row my-3 icons">
      <slot name="icons" />
    </div>

    <div class="row collapse" :class="{'mt-3': false === showIcons}" :id="uuid">
      <div class="col card card-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-box {
  margin-top: 2rem;

  .icons {
    :slotted(*) {
      flex: 1 0 0;
    }
  }
}
</style>
