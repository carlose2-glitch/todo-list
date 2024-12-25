<template>
  <div class="w-full flex items-center flex-col">
    <suspense>
      <list-taks :id="id" />
    </suspense>
  </div>
</template>

<script lang="ts" setup>
import ListTaks from './ListTaks.vue';

interface Props {
  id: string;
}

defineProps<Props>();
</script>
