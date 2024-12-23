<template>
  <div class="w-full flex items-center flex-col">
    <list-taks />

    <icons-vue @click="open = true" />

    <modal-task :open="open" @close="open = false" :id="id" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import IconsVue from './IconsVue.vue';
import ListTaks from './ListTaks.vue';
import ModalTask from './ModalTask.vue';

const open = ref(false);

interface Props {
  id: string;
}

defineProps<Props>();
</script>
