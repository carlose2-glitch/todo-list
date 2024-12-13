<template>
  <div v-if="value">
    <HorizontalMenu />
  </div>

  <div v-else class="flex flex-col w-full bg-slate-400 h-screen">
    <headerPage />
    <mainPage />
  </div>
</template>

<script lang="ts" setup>
import { extractLocalStorage } from '@/modules/auth/actions';
import headerPage from '@/modules/common/components/headerPage.vue';
import HorizontalMenu from '@/modules/common/components/horizontalMenu.vue';
import mainPage from '@/modules/common/components/mainPage.vue';
import { ref } from 'vue';

const value = ref<boolean>(false);

const verificationLocalStorage = async () => {
  const extractLocal = localStorage.getItem('token');

  if (extractLocal) {
    const consult = await extractLocalStorage(extractLocal);

    console.log(consult);
    value.value = true;
  } else {
    value.value = false;
  }
};

verificationLocalStorage();
</script>
