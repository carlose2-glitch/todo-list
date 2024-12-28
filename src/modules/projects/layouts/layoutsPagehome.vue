<template>
  <div class="flex flex-col w-full bg-slate-400 h-screen">
    <header-page />
    <main-page />
  </div>
</template>

<script lang="ts" setup>
import HeaderPage from '@/modules/common/components/headerPage.vue';
import MainPage from '@/modules/common/components/mainPage.vue';
</script>
