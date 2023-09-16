<script setup>
import SectionHeader from "@/components/SectionHeader.vue";

const jobStatus = {
  searching: false,
  for: 'C# Developer',
}
</script>

<template>
  <div class="job-status text-center p-4">
    <SectionHeader title="Job Status" />

    <h3 v-if="jobStatus.searching" class="text-success">Ich suche aktuell nach einem Job als {{jobStatus.for}}</h3>
    <h3 v-else class="text-danger">Ich bin aktuell nicht auf der Suche nach einem Job</h3>
  </div>
</template>

<style scoped>

</style>