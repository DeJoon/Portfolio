<script setup>
import CardBox from './components/CardBox.vue'
import CardRow from './components/card/CardRow.vue'
import {ref} from "vue";

const calculateAge = () => {
  const birthdate = new Date('10.04.2001')
  const difference = new Date(Date.now() - birthdate.getTime())

  return Math.abs(difference.getUTCFullYear() - 1970)
};

const profile = ref([
  { title: 'Name:', value: 'Jan Lukas Dein' },
  { title: 'Geburtstag:', value: '04.10.2001' },
  { title: 'Alter:', value: calculateAge() },
  { title: 'Geschlecht:', value: 'Männlich' },
  { title: 'Nationalität:', value: 'Deutsch' },
  { title: 'Geburtsort:', value: 'Kaiserslautern in Deutschland' },
])
</script>

<template>
  <h1 class="text-sm-center">Portfolio von Jan Lukas Dein</h1>

  <h2>Steckbrief</h2>
  <CardBox>
    <CardRow v-for="(item, index) in profile" :key="index" :title="item.title" :text="item.value" />
  </CardBox>

  <h2>Über mich</h2>
  <div class="text-justify">
    Ich bin ein junger Mann und interessiere mich sehr für die Programmierung. Dabei habe ich schon vieles
    ausprobiert, ob in der Schule, auf der Arbeit und privat. Dabei konnte ich mir Kenntnisse über verschiedene
    Programmiersprachen und Technologien aneignen. Ein paar davon sind unten aufgelistet :)
    <br /><br />
    In meiner Freizeit lese ich gerne oder bewege mich. Entweder gehe ich einfach laufen, treffe mich mit Freunden
    oder gehe ins Fitnessstudio. Zu Hause lese ich gerne oder spiele Videospiele mit Freunden.
  </div>
</template>

<style scoped>
  h2 {
    padding-top: 2rem;
    padding-bottom: .5rem;
  }

  .text-justify {
    text-align: justify;
  }
</style>
