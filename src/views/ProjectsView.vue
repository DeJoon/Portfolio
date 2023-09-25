<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import CollapseBox from "@/components/CollapseBox.vue";
</script>

<template>
  <div class="p-4">
    <div class="experience mt-5">
      <SectionHeader title="Projekte / Praktika" />

      <div class="content">
        <CollapseBox title="Fraunhofer ITWM">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fas', 'chart-line']" size="3x" />
          </template>

          Im Zuge meines Fachabiturs bekam ich am Ende des zweiten Jahres, wegen meinen Leistungen, die
          Möglichkeit mein Abschlussprojekt beim Fraunhofer ITWM in Kaiserslautern zu absolvieren. Dabei habe ich
          eine bestehende Software zur Auswertung von verschiedenen Automobildaten erweitert, welche unter anderem
          mittels Graphen die Beständigkeit und die Belastbarkeit von Autoteilen bestimmen kann. Meine Aufgabe war
          dabei bestehende Pointer in dem C++ Programm durch "Smarte Pointer" zu ersetzen. Der Vorteil dieser Pointer
          ist, dass sie wissen, wenn sie nicht mehr gebraucht werden und dann selbstständig ihren Speicher freigeben.
          Außerdem habe ich bestehende Fenster um ein paar weitere Eingabefelder mittels Qt erweitert.
        </CollapseBox>

        <CollapseBox title="BBS1 HIT-Roboter-AG">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fas', 'robot']" size="3x" />
            <font-awesome-icon :icon="['fab', 'raspberry-pi']" size="3x" />
            <font-awesome-icon :icon="['fab', 'python']" size="3x" />
          </template>

          Die HIT-Roboter-AG war eine freiwillige Arbeitsgemeinschaft während meines Fachabiturs. In dieser AG ging es
          darum, eigenständig einen Roboter zu bauen, der mithilfe eines Programms gesteuert werden konnte. Dieser
          sollte anschließend in der Lage sein, alleine einer schwarzen Linie auf weißem Hintergrund zu folgen.
          <br /><br />
          Dafür kamen zwei einfache Motoren mit Rädern, eine Powerbank, mehrere Sensoren mit Widerständen und ein
          Raspberry Pi zum Einsatz. Als Programmiersprache wurde Python verwendet.
          <br /><br />
          Zu Beginn musste der Roboter gebaut werden. Dabei wurden die Motoren und Sensoren in Reihe mit Widerständen
          geschaltet, um die Spannung anzupassen. Sowohl die Sensoren als auch die Motoren wurden anschließend an die
          GPIO-Pins des Raspberry Pi angeschlossen. Das erste Programm bestand darin, den Roboter auf Anweisung hin zu
          bewegen. Wenn also eine Taste auf der Tastatur gedrückt wurde, sollte sich der Roboter entsprechend bewegen.
          Nachdem diese Funktion implementiert war, wurde das Programm so erweitert, dass es die Sensordaten auslesen
          und die Motoren entsprechend steuern konnte, um der Linie zu folgen.
        </CollapseBox>

        <CollapseBox title="AoP UG">
          Während meines sechswöchigen Praktikums während meines Fachabiturs arbeitete ich in einem Einzelunternehmen.
          Meine Aufgabe bestand darin, eine Desktop-Applikation zu entwickeln, die als Garantiezeitverwaltung dienen
          sollte. Die Anwendung sollte es ermöglichen, Artikel mit Informationen darüber zu speichern, wo sie gekauft
          wurden, wann der Kauf erfolgte und wie lange die Garantie dafür gilt. Alle diese Informationen sollten in
          einem DataGrid angezeigt werden, das die Daten aus einer SQL-Server-Datenbank im Hintergrund ausliest. Die
          gesamte Anwendung wurde mit C# entwickelt und mit Windows Forms gestaltet. Mir wurde dabei freie Hand
          gelassen, wie ich das Programm gestalte.
        </CollapseBox>

        <CollapseBox title="Spinnerei Lampertsmühle GmbH">
          <template v-slot:icons>
            <font-awesome-icon :icon="['fas', 'industry']" size="3x" />
          </template>

          Während meiner Schulzeit absolvierte ich ein Praktikum in der Spinnerei Lampertsmühle. In dieser Zeit führte
          ich verschiedene Tätigkeiten als Schlosser und Einrichter für die Spinnmaschinen auf dem Firmengelände aus.
          Meine Aufgaben umfassten die Überprüfung der Garnqualität sowie gegebenenfalls die Nachjustierung der
          Maschinen. Darüber hinaus war ich auch an der Vorbereitung der Maschinen für neue Garne beteiligt, da diese
          entsprechend den Kundenanforderungen eingestellt werden mussten. Wir erhielten klare Vorgaben vom Kunden,
          denen ich sehr genau folgen musste. Abhängig von der Garnstärke wurden dann die erforderlichen Zahnräder
          eingebaut.
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