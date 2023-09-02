<script setup>
import CardBox from './components/CardBox.vue'
import CardRow from './components/card/CardRow.vue'
import SkillRow from "@/components/SkillRow.vue";
import { ref } from "vue";

const calculateAge = () => {
  const birthdate = new Date('10.04.2001')
  const difference = new Date(Date.now() - birthdate.getTime())

  return Math.abs(difference.getUTCFullYear() - 1970).toString()
};

const profile = ref([
  {title: 'Name:', value: 'Jan Lukas Dein'},
  {title: 'Geburtstag:', value: '04. Oktober 2001'},
  {title: 'Alter:', value: calculateAge()},
  {title: 'Geschlecht:', value: 'Männlich'},
  {title: 'E-Mail:', value: 'jandein04@gmail.com'},
])
</script>

<template>
  <nav class="position-fixed">
    <a href="#">You</a>
  </nav>

  <div class="introduction text-center align-middle px-3 mb-5 text-white">
    <h2>cout&lt;&lt;"Hello World";</h2>
    <h1 class="my-4 lh-sm">Mein Name ist Jan Lukas Dein</h1>
    <div>
      und mit dieser Ausgabe wurde mein Interesse an der Programmierung geweckt
    </div>
  </div>

  <div class="main p-4">
    <div class="about-me text-center">
      <h2 class="mb-5">Über mich</h2>
      <img src="#" alt="Ich" class="profile-picture" />
      <div>
        Ich bin Jan und ein gelernter Fachinformatiker im Bereich der Anwendungsentwicklung.
        Dabei arbeite ich sehr gerne mit verschiedenen Technologien und Frameworks.
        Meine größte Stärke ist dabei die Entwicklung des Backends, kann aber auch nach Angaben das Frontend gestalten.
        Im Team zu arbeiten ist für mich eine Selbstverständlichkeit, weshalb ich mich gerne im Team engagiere.
      </div>
    </div>

    <div class="profile mt-5">
      <CardBox>
        <CardRow v-for="(item, index) in profile" :key="index" :title="item.title" :text="item.value"/>
      </CardBox>
    </div>

    <div class="skills mt-5">
      <SkillRow title="PHP" percentage="85" />
      <SkillRow title="HTML/CSS" percentage="80" />
      <SkillRow title="C#" percentage="75" />
      <SkillRow title="JavaScript" percentage="50" />
      <SkillRow title="Vue" percentage="50" />
    </div>
  </div>
</template>

<style scoped>
.introduction {
  height: 100vh;
  padding-top: 100%;

  background-image: url("./assets/img/cat.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.main {
  .about-me {
    .profile-picture {
      height: 6rem;
      width: 6rem;
      display: inline-block;
      border-radius: 100%;
    }
  }
}
</style>
