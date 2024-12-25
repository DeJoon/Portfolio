<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import CardRow from '@/components/CardBox/CardRow.vue';
import CardBox from '@/components/CardBox.vue';
import SectionHeader from '@/components/SectionHeader.vue';


const { t, d } = useI18n();

const calculateAge = () => {
  const birthdate = new Date('10.04.2001');
  const difference = new Date(Date.now() - birthdate.getTime());

  return Math.abs(difference.getUTCFullYear() - 1970).toString();
};

const profile = computed(() => [
  { title: t('misc.name'), value: 'Jan Lukas Dein' },
  { title: t('misc.birthday'), value: d(new Date(2001, 9, 4), 'long') },
  { title: t('misc.age'), value: calculateAge() },
  { title: t('misc.sex.gender'), value: t('misc.sex.male') },
  { title: t('misc.mail'), value: 'jandein04+business@gmail.com' },
]);
</script>

<template>
  <div class="p-4">
    <div class="about-me text-center">
      <SectionHeader :title="t('aboutMe.title')" />
      <img
        src="../assets/img/me.jpg"
        alt="Me"
        class="profile-picture"
      >
      <div class="mt-3">
        {{ t('aboutMe.text') }}
      </div>
    </div>

    <div class="profile mt-5">
      <CardBox>
        <CardRow
          v-for="(item, index) in profile"
          :key="index"
          :title="item.title"
          :text="item.value"
        />
      </CardBox>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/colors";

.about-me {
  .profile-picture {
    width: 16rem;
    display: inline-block;
    border-radius: 100%;
    border: 1px solid;
    background-color: $color-scheme-200;
  }
}
</style>