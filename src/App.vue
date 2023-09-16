<script setup>
import IntroductionView from "@/views/IntroductionView.vue";
import AboutMeView from "@/views/AboutMeView.vue";
import ExperienceView from "@/views/ExperienceView.vue";
import FunFactsView from "@/views/FunFactsView.vue";
import JobStatusView from "@/views/JobStatusView.vue";
import FindMeOnView from "@/views/FindMeOnView.vue";
</script>

<template>
  <IntroductionView />

  <AboutMeView />

  <ExperienceView />

  <FunFactsView />

  <JobStatusView />

  <FindMeOnView />
</template>

<style lang="scss" scoped>
@import "assets/colors";

.highlighted {
  background-color: $color-scheme-50;
}
</style>
