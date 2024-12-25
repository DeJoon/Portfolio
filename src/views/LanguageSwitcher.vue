<script setup>
import Cookies from 'js-cookie';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

const { locale, availableLocales, fallbackLocale } = useI18n({ useScope: 'global' });
const route = useRoute();
const router = useRouter();
const selectedLocale = ref(locale.value);

const updateLocale = () => {
  const newLocale = availableLocales.includes(selectedLocale.value) ? selectedLocale.value : fallbackLocale.value;
  locale.value = newLocale;
  selectedLocale.value = newLocale;
  router.push({ query: { locale: newLocale } });
  Cookies.set('locale', newLocale, { expires: 30 });
};

watch(
  () => route.query,
  (query) => {
    const queryOrCookieLocale = query.locale ?? Cookies.get('locale');

    if (undefined === queryOrCookieLocale) {
      return;
    }

    selectedLocale.value = queryOrCookieLocale;
    updateLocale();
  },
  { immediate: true }
);
</script>

<template>
  <div class="select-wrapper top-0 end-0 p-3 z-3">
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
</template>

<style scoped>
@media (max-width: 1226px) {
  .select-wrapper {
    position: absolute;
  }
}

@media (min-width: 1226px) {
  .select-wrapper {
    position: fixed;
  }
}
</style>
