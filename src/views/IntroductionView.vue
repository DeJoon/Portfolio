<script setup>

</script>

<template>
  <div class="introduction px-3 text-white d-flex justify-content-center align-items-center">
    <div class="text-center">
      <h2>cout&lt;&lt;"Hello World";</h2>
      <h1 class="my-4 lh-sm">Mein Name ist Jan Lukas Dein</h1>
      <div>
        und mit dieser Ausgabe wurde mein Interesse an der Programmierung geweckt
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/colors";

h1, h2 {
  color: $white;
}

.introduction {
  height: 100vh;
  position: relative;

  background-image: url("../assets/img/balou.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 512px) {
    background-size: contain;
  }
}
</style>