<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import ResumeCard from "@/components/ResumeCard.vue";
</script>

<template>
<div class="p-4">
  <SectionHeader title="Lebenslauf" />

  <ResumeCard location="Kaiserslautern Deutschland" name="ALZURA AG" until="Jetzt">
    Ausbildung zum Fachinformatiker Anwendungsentwicklung für 3 Jahre. Danach Vollzeitangestellter als
    Full-Stack Developer in der Webentwicklung, was auch der Schwerpunkt meiner Ausbildung war.
  </ResumeCard>

  <ResumeCard location="BBS1-Technik Kaiserslautern Deutschland" name="Höhere Berufsfachschule Informationstechnik" until="August 2020">
    Im August 2018 habe ich mein 2 jähriges Fachabitur im Bereich der Informationstechnik angefangen und habe
    den Schwerpunkt im zweiten Jahr auf die Anwendungsentwicklung gelegt.
  </ResumeCard>

  <ResumeCard location="Kaiserslautern Deutschland" name="Schulische Grundbildung" until="August 2018" from="August 2007">
    Meine Schulische Grundbildung habe ich im August 2018 mit der 10ten Klasse abgeschlossen.
  </ResumeCard>
</div>
</template>

<style scoped>

</style>