<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import SectionHeader from '@/components/SectionHeader.vue';

const { t } = useI18n();

const languages = computed(() => [
  { language: t('language.german.name'), level: t('language.german.level') },
  { language: t('language.english.name'), level: t('language.english.level') },
  { language: t('language.japanese.name'), level: t('language.japanese.level') },
]);
</script>

<template>
  <div class="p-4">
    <SectionHeader :title="t('misc.language', 2)" />

    <table class="table text-center">
      <thead>
        <tr>
          <th scope="col">
            {{ t('misc.language', 1) }}
          </th>
          <th scope="col">
            {{ t('misc.level') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in languages"
          :key="key"
        >
          <td>{{ item.language }}</td>
          <td>{{ item.level }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  max-width: 512px;
  margin: 0 auto;
}

th {
  font-weight: bold;
}
</style>
