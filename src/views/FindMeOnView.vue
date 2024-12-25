<script setup>
import { ref } from 'vue';
import LinkIcon from '@/components/LinkIcon.vue';
import SectionHeader from '@/components/SectionHeader.vue';

const findMeOnPages = ref([
  { href: 'https://github.com/DeJoon', icon: ['fab', 'github'] },
  { href: 'https://discord.com', icon: ['fab', 'discord'], text: '@dejoon' },
  { href: 'mailto:jandein04+business@gmail.com', icon: ['fas', 'envelope'] },
]);
</script>

<template>
  <div class="p-4 find-me-on">
    <SectionHeader title="Find me on" />

    <div class="container">
      <div class="row text-center">
        <LinkIcon
          v-for="(item, key) in findMeOnPages"
          :key="key"
          :href="item.href"
          :icon="item.icon"
          :text="item.text ?? ''"
          class="col"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>