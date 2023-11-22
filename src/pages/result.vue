<script setup lang="ts">
const isLogin=useRoute().query?.login
const {t}=useI18n()
</script>

<template>
  <div pt-4 flex justify-center items-center flex-col>
    <div class="i-carbon-checkmark-outline mt-20 text-50 text-[#eee]"/>
    <div class="mt-10 text-gray text-2xl">{{ isLogin=="true" ? t("result.success"): t("result.fail") }}</div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
