<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import ResumeCard from "@/components/ResumeCard.vue";
</script>

<template>
<div class="p-4">
  <SectionHeader title="Lebenslauf" />

  <ResumeCard location="Kaiserslautern Deutschland" name="ALZURA AG" until="Jetzt">
    In diesem Unternehmen habe ich meine Ausbildung als Fachinformatiker Anwendungsentwicklung für 3 Jahre gemacht.
    Danach wurde ich Vollzeit als Full-Stack Developer in der Webentwicklung eingesetzt.
  </ResumeCard>

  <ResumeCard location="BBS1-Technik Kaiserslautern Deutschland" name="Höhere Berufsfachschule Informationstechnik" until="August 2020">
    Im August 2018 habe ich mein zweijähriges Fachabitur im Bereich Informationstechnik begonnen und im zweiten
    Jahr den Schwerpunkt auf die Anwendungsentwicklung gelegt.
  </ResumeCard>

  <ResumeCard location="Kaiserslautern Deutschland" name="Schulische Grundbildung" until="August 2018" from="August 2007">
    Meine Schulische Grundbildung habe ich im August 2018 mit der 10ten Klasse abgeschlossen.
  </ResumeCard>
</div>
</template>

<style scoped>

</style>