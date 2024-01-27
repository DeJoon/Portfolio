<script setup>
import {onMounted, ref, useSlots} from "vue";
import crypto from "node:crypto";

defineProps({
  title: {
    type: String,
    required: true
  }
})

const showIcons = undefined !== useSlots().icons
const uuid = crypto.randomUUID().toString()
const isCollapsed = ref(true)
const collapse = ref(null)

onMounted(() => {
  collapse.value?.addEventListener('show.bs.collapse', () => {
    isCollapsed.value = false
  })

  collapse.value?.addEventListener('hide.bs.collapse', () => {
    isCollapsed.value = true
  })
})
</script>

<template>
  <div class="container experience-box">
    <div class="pointer" data-bs-toggle="collapse" :data-bs-target="'#' + uuid" aria-expanded="false" :aria-controls="uuid">
      <div class="row align-items-center justify-content-between">
        <h4 class="col-10 mb-0">{{ title }}</h4>
        <div class="col-1 transition-container" :class="{rotate: false === isCollapsed}">
          <font-awesome-icon :icon="['fas', 'angle-down']" />
        </div>
      </div>

      <div v-if="showIcons" class="row my-3 icons">
          <slot name="icons" />
      </div>
    </div>

    <div class="row collapse" :class="{'mt-3': false === showIcons}" :id="uuid" ref="collapse">
      <div class="col card card-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience-box {
  margin-top: 2rem;

  .icons {
    :slotted(*) {
      flex: 1 0 0;
    }
  }
}

.pointer {
  cursor: pointer;
}

.transition-container {
  svg {
      transition: transform .25s ease-in-out;
  }

  &.rotate svg {
      transform: rotate(180deg);
  }
}
</style>
