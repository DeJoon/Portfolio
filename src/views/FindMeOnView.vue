<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import LinkIcon from "@/components/LinkIcon.vue";
import {ref} from "vue";

const findMeOnPages = ref([
  {href: 'https://github.com/DeJoon', icon: ['fab', 'github']},
  {href: 'https://www.xing.com/profile/JanLukas_Dein', icon: ['fab', 'square-xing']},
  {href: 'mailto:jandein04@gmail.com', icon: ['fas', 'envelope']},
])
</script>

<template>
  <div class="p-4 find-me-on">
    <SectionHeader title="Find me on" />

    <div class="container">
      <div class="row text-center">
        <LinkIcon v-for="(item, key) in findMeOnPages" :key="key" :href="item.href" :icon="item.icon" class="col" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>