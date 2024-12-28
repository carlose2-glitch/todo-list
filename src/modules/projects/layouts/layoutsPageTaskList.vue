<template>
  <div class="bg-gray-200 h-screen w-full flex flex-col">
    <!-- Main -->
    <main-user :id="id" />
  </div>
</template>

<script lang="ts" setup>
import MainUser from '@/modules/common/components/MainUser.vue';

interface Props {
  id: string;
}

const data = defineProps<Props>();

console.log(data.id);
</script>
