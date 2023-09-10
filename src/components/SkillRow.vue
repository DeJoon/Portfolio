<script setup>
import { computed } from "vue";

const props = defineProps({
  percentage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
})

const popoverOffset = computed(() => {
  return `left: ${props.percentage - 5}%;`
})
const width = computed(() => {
  return `width: ${props.percentage}%;`
})
</script>

<template>
  <div class="skill-row">
    <div class="title">{{ title }}</div>
    <div class="percentage-popover" :style="popoverOffset">{{ percentage }}%</div>
    <div class="progress">
      <div class="progress-bar bg-black" role="progressbar" :style="width" :aria-valuenow="width" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</template>

<style scoped>
.skill-row {
  .title {
    position: relative;
    top: 25px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .percentage-popover {
    position: relative;
    display: inline-block;
    width: 32px;
    color: white;
    font-size: .75rem;
    background: #313131;
    border-radius: 3px;
    text-align: center;
    padding-top: .25rem;
    padding-bottom: .25rem;
    margin-bottom: 1rem;

    &::after {
      content:'';
      position: relative;
      top: 26px;
      left: -10px;
      margin: -6px;
      border-top: 6px solid #313131;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }

  .progress {
    height: 6px;
    background-color: white;

    .progress-bar {
      border-radius: 0;
    }
  }
}
</style>
