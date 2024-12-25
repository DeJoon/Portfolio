<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import AboutMeView from '@/views/AboutMeView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import FindMeOnView from '@/views/FindMeOnView.vue';
import FunFactsView from '@/views/FunFactsView.vue';
import IntroductionView from '@/views/IntroductionView.vue';
import LanguageView from '@/views/LanguageView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import ResumeView from '@/views/ResumeView.vue';

const { locale, availableLocales, fallbackLocale } = useI18n({ useScope: 'global' });
const route = useRoute();
const router = useRouter();
const selectedLocale = ref(locale.value);

const updateLocale = () => {
  const newLocale = availableLocales.includes(selectedLocale.value) ? selectedLocale.value : fallbackLocale.value;
  locale.value = newLocale;
  selectedLocale.value = newLocale;
  router.push({ query: { locale: newLocale } });
};

watch(
  () => route.query,
  (query) => {
    selectedLocale.value = query.locale;
    updateLocale();
  },
  { immediate: true }
);
</script>

<template>
  <div class="position-fixed top-0 end-0 p-3 z-3">
    <select
      v-model="selectedLocale"
      class="form-select"
      aria-label="Default select example"
      @change="updateLocale"
    >
      <option value="de">
        Deutsch
      </option>
      <option value="en">
        English
      </option>
    </select>
  </div>

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
