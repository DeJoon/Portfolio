<script setup>
import { useHead } from '@unhead/vue';
import meImage from './assets/img/me.jpg';
import AboutMeView from '@/views/AboutMeView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import FindMeOnView from '@/views/FindMeOnView.vue';
import FunFactsView from '@/views/FunFactsView.vue';
import IntroductionView from '@/views/IntroductionView.vue';
import LanguageSwitcher from '@/views/LanguageSwitcher.vue';
import LanguageView from '@/views/LanguageView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import ResumeView from '@/views/ResumeView.vue';

useHead({
  meta: [
    { name: 'og:title', content: 'Portfolio - Jan Lukas Dein' },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: window.location.origin },
    { name: 'og:image', content: `${window.location.origin }${meImage}` },
    { name: 'og:description', content: 'This is the CV website of Jan Lukas Dein. If you want to know more about my experience, please check it out.' },
  ],
});
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
@import 'assets/colors';

.highlighted {
  background-color: $color-scheme-50;
  border-radius: 10px;
}
</style>
