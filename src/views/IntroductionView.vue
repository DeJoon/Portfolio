<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="introduction px-3 text-white d-flex justify-content-center align-items-center">
    <div class="text text-center">
      <h2>cout&lt;&lt;"Hello World";</h2>
      <h1 class="my-4 lh-sm">
        {{ t('introduction.title') }}
      </h1>
      <div>
        {{ t('introduction.text') }}
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

.text {
  @media (min-width: 512px) {
    max-width: 50%;
  }
}
</style>
