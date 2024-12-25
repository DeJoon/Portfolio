<script setup>
import AboutMeView from '@/views/AboutMeView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import FindMeOnView from '@/views/FindMeOnView.vue';
import FunFactsView from '@/views/FunFactsView.vue';
import IntroductionView from '@/views/IntroductionView.vue';
import LanguageSwitcher from '@/views/LanguageSwitcher.vue';
import LanguageView from '@/views/LanguageView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import ResumeView from '@/views/ResumeView.vue';
</script>

<template>
  <LanguageSwitcher />

  <IntroductionView />

  <AboutMeView />

  <ExperienceView class="highlighted" />

  <ProjectsView />

  <ResumeView class="highlighted mt-5" />

  <LanguageView />

  <FunFactsView />

  <FindMeOnView />
</template>

<style lang="scss" scoped>
@import '@/assets/colors';

.highlighted {
  background-color: $color-scheme-50;
  border-radius: 10px;
}
</style>
