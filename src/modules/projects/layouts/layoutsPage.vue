<template>
  <div class="flex flex-col w-full bg-slate-500 h-screen">
    <headerPage />
    <mainPage />
  </div>
</template>

<script lang="ts" setup>
import headerPage from '@/modules/common/components/headerPage.vue';
import mainPage from '@/modules/common/components/mainPage.vue';
</script>
