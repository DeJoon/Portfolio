<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import SkillRow from "@/components/SkillRow.vue";
import ExperienceBox from "@/components/ExperienceBox.vue";
import {ref} from "vue";

const skills = ref([
  {title: 'PHP', percentage: '85'},
  {title: 'HTML/CSS', percentage: '80'},
  {title: 'C#', percentage: '75'},
  {title: 'JavaScript', percentage: '50'},
  {title: 'Vue', percentage: '50'},
])
</script>

<template>
  <div class="p-4">
    <div class="skills mt-5">
      <SectionHeader title="Skills" />
      <SkillRow v-for="(item, index) in skills" :key="index" :title="item.title" :percentage="item.percentage" />
    </div>

    <div class="experience mt-5">
      <SectionHeader title="Erfahrung" />

      <div class="content">
        <ExperienceBox title="Ausbildung">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fas', 'graduation-cap']" size="3x" />
          </template>

          Nach dem Abschluss meines Fachabiturs habe ich direkt meine Ausbildung als Fachinformatiker in der
          Anwendungsentwicklung begonnen. Dabei habe ich in einem Betrieb gearbeitet, welcher eine E-Commerce
          Plattform für Reifen und andere Autoteile anbot und dadurch in der Webentwicklung tätig war. Dabei bin ich
          mit verschiedenen Sprachen und Technologien in Berührung gekommen und habe im selben Betrieb auch
          erfolgreich meine Ausbildung abgeschlossen. Meine Ausbildung endete nach drei Jahren im Juli 2023.
        </ExperienceBox>

        <ExperienceBox title="PHP / Symfony">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fab', 'php']" size="3x" />
            <font-awesome-icon :icon="['fab', 'symfony']" size="3x" />
          </template>

          In meiner Ausbildung als Anwendungsentwickler habe ich in einem Betrieb gearbeitet, welcher in der
          Webentwicklung tätig war. Dabei wurde auf PHP für das Backend gesetzt. Dabei kam vor allem das Symfony
          Framework zum Einsatz. Durch Symfony habe ich gelernt wie man Endpunkte gestaltet, Eingaben und Ausgaben
          verarbeitet und selbige auch Dokumentiert. Über die Jahre habe ich dabei viele Endpunkte geschrieben und an
          vielen verschiedenen Projekten gearbeitet. Darunter war auch ein CLI-Projekt, welches für Commands oder
          RabbitMQ Consumer verwendet wurde. Für das Umsetzen von Mockups wurden die Templatesprachen Smarty und Twig
          verwendet. Um Stylesheets ein wenig einfacher zu gestalten wurde oft auf SCSS zurück gegriffen. Als CSS
          Framework diente dabei häufig Bootstrap.
        </ExperienceBox>

        <ExperienceBox title="Versionsverwaltung">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fab', 'git-alt']" size="3x" />
            <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            <font-awesome-icon :icon="['fab', 'gitlab']" size="3x" />
          </template>

          Für einen Entwickler sollte es selbstverständlich sein mit einer Versionskontrolle zu arbeiten, gerade
          wenn es sich dabei um ein Projekt in einer professionellen Umgebung handelt. Man kann Git dabei wohl als
          die größte Versionsverwaltung bezeichnen. Dabei bin ich mit den gängigsten Git Techniken vertraut und habe
          auch schon manuell mit Git Releases erstellt, Back merges gemacht oder auch mal mit Cherry-Pick gearbeitet.
          Für die Versionsverwaltung auf dem Server habe ich entweder GitLab oder GitHub verwendet, wobei ich GitLab
          nur auf der Arbeit benutzt habe. Privat benutze ich ausschließlich GitHub.
        </ExperienceBox>

        <ExperienceBox title="Tests">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fas', 'microscope']" size="3x" />
          </template>

          Für das Testen meines Codes habe ich Unit Test und Behat Tests geschrieben. Um die Unit Tests zu schreiben
          wurde dabei PHPUnit benutzt. Dabei wurden einzelne Klassen ausgiebig getestet. Wenn eine Klasse Änderungen
          an der Datenbank macht, oder Daten aus dieser Abruft, wurde sicher gestellt, dass der SQL immer gleich ist.
          Diese Tests waren gerade in Packages bzw. Bundles sehr wichtig, da das Ändern des Codes zu einem Breaking
          Change führen kann, wofür eine neue Version veröffentlicht werden muss, um keinen bestehenden Code instabil
          zu machen. Behat Tests wurden dann zusätzlich noch für die API Projekte benutzt, um zu überprüfen, ob
          die Endpunkte sich nach gewissen Vorgaben verhalten. Dies ist auch wieder für alte API Versionen wichtig,
          damit Implementierungen mit älteren Versionen nicht kaputt gehen.
        </ExperienceBox>

        <ExperienceBox title="CI/CD (Jenkins)">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fab', 'jenkins']" size="3x" />
          </template>

          Beim Entwickeln von Software sollte die Qualitätssicherung einen hohen Stellenwert haben. Jeder kennt das
          Gefühl, wenn ein Programm oder eine Webseite nicht so funktioniert, wie sie soll. Tests alleine reichen
          dafür meist nicht aus. Wenn keine Tests ausgeführt werden, dann können auch keine fehlschlagen. Um zu
          verhindern, dass eine instabile Codebasis gemerget wird, habe ich in meiner Ausbildung Jenkins benutzt.
          Dabei war es zwar nicht meine Aufgabe, diesen zu konfigurieren, jedoch habe ich mit Jenkins täglich die
          Stabilität meines Codes geprüft. Außerdem habe ich Jenkins benutzt, um beim Release den Code auf die
          Webserver zu deployen. Außerdem wurde GitLab bei uns so konfiguriert, dass ein Merge in main/master/develop
          nur dann möglich war, wenn Jenkins vorher die Qualität sicher gestellt hat.
        </ExperienceBox>

        <ExperienceBox title="C#">
          Angefangen habe ich mit C# im Zuge meines Fachabiturs auf der BBS1 Technik Kaiserslautern mit Schwerpunkt
          auf Anwendungsentwicklung. Dabei habe ich schnell gemerkt, dass mir die Sprache und auch die IDE von
          Microsoft sehr gefällt. Als ich dann auch noch ein Praktikum in einem Unternehmen gemacht habe, in dem ich
          C# für ein Projekt benutzen musste, wurde mein Interesse für die Sprache erst richtig geweckt. Darauf hin
          habe ich mich privat sehr viel mit der Sprache auseinander gesetzt. Dabei habe ich auch auf verschiedene
          Erweiterungen wie beispielsweise LINQ oder SQLKata als Query Builder für meine SQLite Datenbank gesetzt.
        </ExperienceBox>

        <ExperienceBox title="MVVM (Caliburn Micro)">
          Als ich mir C# beigebracht habe, verbrachte ich die meiste Zeit damit Windows Forms Programme zu schreiben.
          Da man mit Windows Forms jedoch relativ eingeschränkt ist, was die skalierbarkeit der GUI angeht, habe ich
          mich vermehrt mit WPF auseinander gesetzt. Auch wenn WPF auf den ersten Blick deutlich komplizierter ist,
          hatte ich Spaß an der Herausforderung und konnte mich auch schnell daran gewöhnen. Jedoch erkannte ich auch
          hier nach kurzer Zeit, dass das Arbeiten mit Daten in Textfeldern oder anderen Elementen sehr Zeitaufwendig
          ist, habe ich mich mit MVVM auseinander gesetzt. Also Framework habe ich Caliburn Micro verwendet, welches
          sehr Anfängerfreundlich, aber dennoch mächtig ist.
        </ExperienceBox>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience {
  .content {
    border-left: 1px solid #575757;
    padding-left: 1rem;
  }
}
</style>