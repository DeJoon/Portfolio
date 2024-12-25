<script setup>
import {ref} from 'vue';
import { useI18n } from 'vue-i18n';
import CollapseBox from '@/components/CollapseBox.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import SkillRow from '@/components/SkillRow.vue';

const { t } = useI18n();

const skills = ref([
  {title: 'PHP', percentage: '85'},
  {title: 'HTML/CSS', percentage: '80'},
  {title: 'C#', percentage: '60'},
  {title: 'JavaScript', percentage: '50'},
  {title: 'Vue', percentage: '50'},
]);
</script>

<template>
  <div class="p-4">
    <div class="skills mt-5">
      <SectionHeader title="Skills" />
      <SkillRow
        v-for="(item, index) in skills"
        :key="index"
        :title="item.title"
        :percentage="item.percentage"
      />
    </div>

    <div class="experience mt-5">
      <SectionHeader :title="t('experience.title')" />

      <div class="content">
        <CollapseBox :title="t('experience.apprenticeship.title')">
          <template #icons>
            <font-awesome-icon
              :icon="['fas', 'graduation-cap']"
              size="3x"
            />
          </template>

          {{ t('experience.apprenticeship.text') }}
        </CollapseBox>

        <CollapseBox :title="t('experience.php.title')">
          <template #icons>
            <font-awesome-icon
              :icon="['fab', 'php']"
              size="3x"
            />
            <font-awesome-icon
              :icon="['fab', 'symfony']"
              size="3x"
            />
          </template>

          {{ t('experience.php.text') }}
        </CollapseBox>

        <CollapseBox :title="t('experience.vcs.title')">
          <template #icons>
            <font-awesome-icon
              :icon="['fab', 'git-alt']"
              size="3x"
            />
            <font-awesome-icon
              :icon="['fab', 'github']"
              size="3x"
            />
            <font-awesome-icon
              :icon="['fab', 'gitlab']"
              size="3x"
            />
          </template>

          {{ t('experience.vcs.text') }}
        </CollapseBox>

        <CollapseBox :title="t('experience.tests.title')">
          <template #icons>
            <font-awesome-icon
              :icon="['fas', 'microscope']"
              size="3x"
            />
          </template>

          {{ t('experience.tests.text1') }}
          <br><br>
          {{ t('experience.tests.text2') }}
        </CollapseBox>

        <CollapseBox :title="t('experience.cicd.title')">
          <template #icons>
            <font-awesome-icon
              :icon="['fab', 'jenkins']"
              size="3x"
            />
          </template>

          {{ t('experience.cicd.text') }}
        </CollapseBox>

        <CollapseBox :title="t('experience.c-sharp.title')">
          {{ t('experience.c-sharp.text') }}
        </CollapseBox>

        <CollapseBox :title="t('experience.mvvm.title')">
          {{ t('experience.mvvm.text') }}
        </CollapseBox>
        
        <CollapseBox :title="t('experience.server.title')">
          <template #icons>
            <font-awesome-icon
              :icon="['fab', 'cloudflare']"
              size="3x"
            />
            <font-awesome-icon
              :icon="['fas', 'server']"
              size="3x"
            />
            <font-awesome-icon
              :icon="['fab', 'ubuntu']"
              size="3x"
            />
            <font-awesome-icon
              :icon="['fab', 'docker']"
              size="3x"
            />
          </template>

          {{ t('experience.server.text1') }}
          <br><br>
          {{ t('experience.server.text2') }}
          <br><br>
          {{ t('experience.server.text3') }}
          <br><br>
          {{ t('experience.server.text4') }}
          <br><br>
          {{ t('experience.server.text5') }}
        </CollapseBox>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience {
  .content {
    border-left: 1px solid #575757;
    padding-left: 1rem;
  }
}
</style>