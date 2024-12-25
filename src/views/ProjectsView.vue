<script setup>
import { useI18n } from 'vue-i18n';
import CollapseBox from '@/components/CollapseBox.vue';
import SectionHeader from '@/components/SectionHeader.vue';

const { t } = useI18n();
</script>

<template>
  <div class="p-4">
    <div class="experience mt-5">
      <SectionHeader :title="t('project.title')" />

      <div class="content">
        <CollapseBox :title="t('project.fraunhofer.title')">
          <template #icons>
            <font-awesome-icon
              :icon="['fas', 'chart-line']"
              size="3x"
            />
          </template>

          {{ t('project.fraunhofer.text') }}
        </CollapseBox>

        <CollapseBox :title="t('project.hit-robot.title')">
          <template #icons>
            <font-awesome-icon
              :icon="['fas', 'robot']"
              size="3x"
            />
            <font-awesome-icon
              :icon="['fab', 'raspberry-pi']"
              size="3x"
            />
            <font-awesome-icon
              :icon="['fab', 'python']"
              size="3x"
            />
          </template>

          {{ t('project.hit-robot.text1') }}
          <br><br>
          {{ t('project.hit-robot.text2') }}
          <br><br>
          {{ t('project.hit-robot.text3') }}
        </CollapseBox>

        <CollapseBox :title="t('project.aop.title')">
          {{ t('project.aop.text') }}
        </CollapseBox>

        <CollapseBox :title="t('project.spinning-mill.title')">
          <template #icons>
            <font-awesome-icon
              :icon="['fas', 'industry']"
              size="3x"
            />
          </template>

          {{ t('project.spinning-mill.text') }}
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
