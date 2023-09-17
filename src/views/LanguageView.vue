<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import {ref} from "vue";

const languages = ref([
  {language: 'Deutsch', niveau: 'Muttersprache'},
  {language: 'Englisch', niveau: 'C1'},
  {language: 'Japanisch', niveau: 'A1'},
])
</script>

<template>
  <div class="p-4">
    <SectionHeader title="Sprachen" />

    <table class="table text-center">
      <thead>
      <tr>
        <th scope="col">Sprache</th>
        <th scope="col">Niveau</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, key) in languages" :key="key">
        <td>{{item.language}}</td>
        <td>{{item.niveau}}</td>
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