<script setup>
import CardBox from '@/components/CardBox.vue'
import CardRow from '@/components/card/CardRow.vue'
import SkillRow from "@/components/SkillRow.vue";
import ExperienceBox from "@/components/ExperienceBox.vue";
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
const skills = ref([
  {title: 'PHP', percentage: '85'},
  {title: 'HTML/CSS', percentage: '80'},
  {title: 'C#', percentage: '75'},
  {title: 'JavaScript', percentage: '50'},
  {title: 'Vue', percentage: '50'},
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
      <h2 class="text-center mb-3">Skills</h2>
      <SkillRow v-for="(item, index) in skills" :key="index" :title="item.title" :percentage="item.percentage" />
    </div>

    <div class="experience mt-5">
      <h2 class="text-center mb-3">Erfahrung</h2>

      <div class="content">
        <ExperienceBox title="Meine Ausbildung als Webentwickler">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fas', 'graduation-cap']" size="3x" />
          </template>

          Während meiner Webentwicklungs-Ausbildung habe ich intensiv PHP studiert und umfassende Erfahrungen in der
          Entwicklung von Webanwendungen gesammelt. Dieses Wissen und meine Begeisterung für PHP sind heute ein
          wesentlicher Teil meiner beruflichen Expertise, und ich setze sie gerne ein,
          um innovative digitale Lösungen zu entwickeln.
        </ExperienceBox>

        <ExperienceBox title="PHP und das Symfony Framework">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fab', 'php']" size="3x" />
            <font-awesome-icon :icon="['fab', 'symfony']" size="3x" />
          </template>

          Als Web Developer habe ich umfangreiche Erfahrung in der Entwicklung von Webanwendungen mit
          PHP und dem Symfony Framework. Diese Kombination ermöglicht es mir,
          leistungsstarke und skalierbare Lösungen zu erstellen.
        </ExperienceBox>

        <ExperienceBox title="Git und GitLab sowie GitHub">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fab', 'git-alt']" size="3x" />
            <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            <font-awesome-icon :icon="['fab', 'gitlab']" size="3x" />
          </template>

          Meine Kenntnisse in Git, GitLab und GitHub ermöglichen eine effiziente Zusammenarbeit und Versionskontrolle
          in Teams. Ich habe Erfahrung in der Verwaltung von Code und der Umsetzung
          von bewährten Entwicklungspraktiken.
        </ExperienceBox>

        <ExperienceBox title="Tests mit PHPUnit und Behat">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fas', 'microscope']" size="3x" />
          </template>

          Die Verwendung von PHPUnit und Behat gehört zu meinen Qualitätsstandards. Ich habe umfangreiche Tests
          erstellt, um sicherzustellen, dass unsere Anwendungen zuverlässig funktionieren und Änderungen
          stabil bleiben.
        </ExperienceBox>

        <ExperienceBox title="CI/CD (unter Verwendung von Jenkins)">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fab', 'jenkins']" size="3x" />
          </template>

          Ich habe umfassende Erfahrung in der Implementierung von Continuous Integration (CI) und Continuous
          Deployment (CD) mithilfe von Jenkins. Diese robuste Automatisierungsplattform hat es mir ermöglicht,
          effiziente CI/CD-Pipelines zu erstellen, die eine zuverlässige und schnelle Bereitstellung unserer
          Webanwendungen gewährleisten.
        </ExperienceBox>

        <ExperienceBox title="C#">
          In meiner beruflichen Laufbahn als Entwickler habe ich umfangreiche Erfahrungen mit C# gesammelt,
          wobei ich mir die Sprache selbst privat beigebracht habe. Die Verwendung von Properties in C# ermöglichte
          mir die Definition und Steuerung des Zugriffs auf Daten in meinen Klassen, was zu einer sauberen und
          effizienten Codebasis beitrug. Darüber hinaus habe ich Linq (Language Integrated Query) intensiv genutzt,
          um komplexe Datenabfragen und -manipulationen in meinen Projekten durchzuführen. Dies ermöglichte mir
          Daten in einer eleganten und leistungsstarken Weise zu filtern und zu transformieren, was die Effizienz und
          Lesbarkeit meines Codes erheblich steigerte. C# hat sich für mich als äußerst vielseitige und leistungsfähige
          Programmiersprache erwiesen, die ich gerne für anspruchsvolle Softwareentwicklungsprojekte einsetze.
        </ExperienceBox>
      </div>
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

  .experience {
    .content {
      border-left: 1px solid #575757;
      padding-left: 1rem;
      margin-left: 8px;
    }

    .experience-box {
      margin-top: 1rem;
    }
  }
}
</style>
