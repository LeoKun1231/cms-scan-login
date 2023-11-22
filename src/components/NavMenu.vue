<script setup lang="ts">
import { toggleDark } from '~/composables/dark';

const {  availableLocales, locale } = useI18n()

function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav text-xl>
   <div class="flex justify-end">
    <a class="icon-btn mx-2 !outline-none"  @click="toggleDark()">
      <div i="ri-sun-line dark:ri-moon-line" />
    </a>
    <a class="icon-btn mx-2" :class="locale === 'en' ? '' : '-rotate-y-180'"  @click="toggleLocales()">
      <div i-ri-translate />
    </a>
   </div>
  </nav>
</template>
