<script setup>
import FunFactCard from "@/components/FunFactCard.vue";
import {ref} from "vue";

const funFacts = ref([
  {icon: ['fas', 'cat'], amount: 1000, text: 'Katzen Videos geschaut'},
  {icon: ['far', 'eye'], amount: 220, text: 'Anime abgeschlossen'},
  {icon: ['fas', 'book'], amount: 150, text: 'Manga im Besitz'},
  {icon: ['fas', 'language'], amount: 5, text: 'Japanisch Units in Duolingo gelernt'},
])
</script>

<template>
  <div class="fun-facts p-4 container">
    <div class="row">
      <FunFactCard v-for="(item, key) in funFacts" :key="key" :text="item.text" :amount="item.amount" :icon="item.icon" class="col-12 col-sm-6" />
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