<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import SkillRow from "@/components/SkillRow.vue";
import CollapseBox from "@/components/CollapseBox.vue";
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
        <CollapseBox title="Ausbildung">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fas', 'graduation-cap']" size="3x" />
          </template>

          Nach dem Abschluss meines Fachabiturs habe ich direkt meine Ausbildung als Fachinformatiker in der
          Anwendungsentwicklung begonnen. Während dieser Zeit arbeitete ich in einem Unternehmen, das eine
          E-Commerce-Plattform für Reifen und andere Autoteile entwickelte und somit im Bereich Webentwicklung tätig
          war. Dabei kam ich mit verschiedenen Programmiersprachen und Technologien in Kontakt und konnte meine
          Ausbildung erfolgreich abschließen. Diese endete im Juli 2023, nach einer Dauer von drei Jahren.
        </CollapseBox>

        <CollapseBox title="PHP / Symfony">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fab', 'php']" size="3x" />
            <font-awesome-icon :icon="['fab', 'symfony']" size="3x" />
          </template>

          Während meiner Ausbildung als Anwendungsentwickler habe ich in einem Unternehmen gearbeitet, das im
          Bereich Webentwicklung tätig war. In dieser Zeit haben ich hauptsächlich PHP für das Backend eingesetzt,
          wobei das Symfony Framework eine zentrale Rolle spielte. Durch Symfony habe ich gelernt, wie man Endpunkte
          gestaltet, Eingaben und Ausgaben verarbeitet und diese dokumentiert. Im Laufe der Jahre habe ich zahlreiche
          Endpunkte erstellt und an verschiedenen Projekten mitgearbeitet. Darunter befand sich auch ein CLI-Projekt,
          das für Befehle oder RabbitMQ Consumer verwendet wurde. Für das Umsetzen von Mockups verwendeten ich die
          Templatesprachen Smarty und Twig. Um die Gestaltung von Stylesheets zu erleichtern, griffen ich oft
          auf SCSS zurück. Außerdem kenne ich mich mit dem CSS-Framework Bootstrap aus.
        </CollapseBox>

        <CollapseBox title="Versionsverwaltung">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fab', 'git-alt']" size="3x" />
            <font-awesome-icon :icon="['fab', 'github']" size="3x" />
            <font-awesome-icon :icon="['fab', 'gitlab']" size="3x" />
          </template>

          Für einen Entwickler sollte es selbstverständlich sein, mit einer Versionskontrolle zu arbeiten,
          insbesondere in einer professionellen Umgebung. Git kann zweifellos als die führende Versionsverwaltung
          angesehen werden. Ich bin mit den gängigsten Git-Techniken vertraut und habe bereits manuell Git-Releases
          erstellt, Back-Merges durchgeführt und auch gelegentlich Cherry-Pick angewendet. Für die Versionsverwaltung
          auf dem Server habe ich entweder GitLab oder GitHub verwendet. Bei meiner Arbeit habe ich hauptsächlich
          GitLab genutzt, während ich privat ausschließlich GitHub verwende.
        </CollapseBox>

        <CollapseBox title="Tests">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fas', 'microscope']" size="3x" />
          </template>

          Für das Testen meines Codes habe ich sowohl Unit Tests als auch Behat Tests geschrieben. Zur Erstellung der
          Unit Tests habe ich PHPUnit verwendet, um einzelne Klassen ausgiebig zu testen. Wenn eine Klasse Änderungen
          an der Datenbank vornahm oder Daten daraus abrief, habe ich sichergestellt, dass die SQL-Abfragen immer
          gleich blieben. Diese Tests waren besonders in Packages oder Bundles von großer Bedeutung, da Änderungen im
          Code zu Breaking Changes führen konnten. In solchen Fällen war es notwendig, eine neue Version zu
          veröffentlichen, um die Stabilität des bestehenden Codes nicht zu gefährden.
          <br /><br />
          Behat Tests wurden zusätzlich für die API-Projekte verwendet, um sicherzustellen, dass die Endpunkte gemäß
          bestimmten Vorgaben funktionierten. Dies war insbesondere wichtig für ältere API-Versionen,
          um sicherzustellen, dass Implementierungen mit älteren Versionen nicht beeinträchtigt wurden.
        </CollapseBox>

        <CollapseBox title="CI/CD (Jenkins)">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fab', 'jenkins']" size="3x" />
          </template>

          Bei der Entwicklung von Software sollte die Qualitätssicherung einen hohen Stellenwert haben. Jeder kennt
          das Gefühl, wenn ein Programm oder eine Webseite nicht so funktioniert, wie sie soll. Allein auf Tests zu
          vertrauen, reicht in der Regel nicht aus. Wenn keine Tests durchgeführt werden, können auch keine Fehler
          entdeckt werden. Um sicherzustellen, dass eine instabile Codebasis nicht gemergt wird, habe ich während
          meiner Ausbildung Jenkins eingesetzt. Obwohl es nicht meine Hauptaufgabe war, Jenkins zu konfigurieren,
          habe ich täglich damit die Stabilität meines Codes überprüft. Darüber hinaus habe ich Jenkins verwendet,
          um den Code beim Release auf die Webserver zu deployen. Bei uns wurde GitLab so konfiguriert, dass ein Merge
          in den Branches main/master/develop nur dann möglich war, wenn Jenkins zuvor die
          Qualität sichergestellt hatte.
        </CollapseBox>

        <CollapseBox title="C#">
          Meine Reise mit C# begann während meines Fachabiturs an der BBS1 Technik Kaiserslautern, wo ich mich auf
          Anwendungsentwicklung spezialisierte. Hier entdeckte ich schnell meine Vorliebe für die Programmiersprache
          und die Entwicklungsumgebung von Microsoft. Während eines Praktikums in einem Unternehmen, bei dem ich C#
          für ein Projekt einsetzen musste, wurde mein Interesse an dieser Sprache weiter gestärkt. Dies motivierte
          mich dazu, mich auch in meiner Freizeit intensiv mit C# zu beschäftigen. Während dieser Zeit erkundete
          ich verschiedene Erweiterungen wie beispielsweise LINQ oder SQLKata, um sie als Query Builder für meine
          SQLite-Datenbank zu verwenden.
        </CollapseBox>

        <CollapseBox title="MVVM (Caliburn Micro)">
          Als ich mir C# beigebracht habe, habe ich die meiste Zeit damit verbracht, Windows Forms-Anwendungen zu
          entwickeln. Da Windows Forms in Bezug auf die Skalierbarkeit der grafischen Benutzeroberfläche relativ
          eingeschränkt ist, habe ich mich verstärkt mit WPF auseinandergesetzt. Obwohl WPF auf den ersten Blick
          deutlich komplexer erscheint, habe ich die Herausforderung genossen und konnte mich schnell damit vertraut
          machen. Allerdings habe ich auch hier bald erkannt, dass die Arbeit mit Daten in Textfeldern und anderen
          Elementen zeitaufwendig sein kann, weshalb ich mich mit MVVM auseinandergesetzt habe. Als Framework habe
          ich Caliburn Micro verwendet, das sowohl für Anfänger geeignet als auch leistungsstark ist.
        </CollapseBox>
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