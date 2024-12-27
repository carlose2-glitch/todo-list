<template>
  <div class="bg-gray-200 h-screen w-full flex flex-col" v-if="value">
    <!-- Main -->
    <main-user :id="id" />
  </div>

  <div v-else class="flex flex-col w-full bg-slate-400 h-screen">
    <headerPage />
    <mainPage />
  </div>
</template>

<script lang="ts" setup>
import { extractLocalStorage } from '@/modules/auth/actions';
import headerPage from '@/modules/common/components/headerPage.vue';
import mainPage from '@/modules/common/components/mainPage.vue';
import MainUser from '@/modules/common/components/MainUser.vue';
import { ref } from 'vue';
const id = ref<string>('');
const value = ref<boolean>(false);

const verificationLocalStorage = async () => {
  const extractLocal = localStorage.getItem('token');

  if (extractLocal) {
    const consult = await extractLocalStorage(extractLocal);

    id.value = consult.id;
    value.value = true;
  } else {
    value.value = false;
  }
};

verificationLocalStorage();
</script>
