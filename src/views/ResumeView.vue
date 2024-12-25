<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import ResumeCard from "@/components/ResumeCard.vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
<div class="p-4">
  <SectionHeader :title="t('cv.title')" />

  <ResumeCard :location="t('cv.alzura.location')" :name="t('cv.alzura.name')" :until="t('cv.alzura.until')">
    {{t('cv.alzura.text')}}
  </ResumeCard>

  <ResumeCard :location="t('cv.bbs1.location')" :name="t('cv.bbs1.name')" :until="t('cv.bbs1.until')">
    {{t('cv.bbs1.text')}}
  </ResumeCard>

  <ResumeCard :location="t('cv.education.location')" :name="t('cv.education.name')" :until="t('cv.education.until')" :from="t('cv.education.from')">
    {{t('cv.bbs1.text')}}
  </ResumeCard>
</div>
</template>

<style scoped>

</style>