<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import FunFactCard from '@/components/FunFactCard.vue';

const { t } = useI18n();

const funFacts = computed(() => [
  { icon: ['fas', 'cat'], amount: 1000, text: t('fun-facts.cat-videos') },
  { icon: ['far', 'eye'], amount: 220, text: t('fun-facts.series') },
  { icon: ['fas', 'book'], amount: 230, text: t('fun-facts.manga') },
  { icon: ['fas', 'desktop'], amount: 15, text: t('fun-facts.websites') },
]);
</script>

<template>
  <div class="fun-facts p-4 container">
    <div class="row">
      <FunFactCard
        v-for="(item, key) in funFacts"
        :key="key"
        :text="item.text"
        :amount="item.amount"
        :icon="item.icon"
        class="col-12 col-sm-6"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/colors";

.fun-facts {
  background-color: $color-scheme-900;
  color: $color-scheme-50;
  border-radius: 10px;
}
</style>
