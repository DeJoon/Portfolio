<script setup>
import CardBox from "@/components/CardBox.vue";
import CardRow from "@/components/CardBox/CardRow.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import {ref} from "vue";

const calculateAge = () => {
  const birthdate = new Date('10.04.2001')
  const difference = new Date(Date.now() - birthdate.getTime())

  return Math.abs(difference.getUTCFullYear() - 1970).toString()
}

const profile = ref([
  {title: 'Name:', value: 'Jan Lukas Dein'},
  {title: 'Geburtstag:', value: '04. Oktober 2001'},
  {title: 'Alter:', value: calculateAge()},
  {title: 'Geschlecht:', value: 'Männlich'},
  {title: 'E-Mail:', value: 'jandein04@gmail.com'},
])
</script>

<template>
  <div class="p-4">
    <div class="about-me text-center">
      <SectionHeader title="Über mich" />
      <img src="../assets/img/me.png" alt="Ich" class="profile-picture" />
      <div class="mt-3">
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
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/colors";

.about-me {
  .profile-picture {
    width: 8rem;
    display: inline-block;
    border-radius: 100%;
    border: 1px solid;
    background-color: $color-scheme-200;
  }
}
</style>