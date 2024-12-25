<template>
  <div class="bg-slate-200 text-slate-700 mx-2 w-[90%]">
    <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <div class="flex flex-row justify-between items-center">
        <div>
          <h1 class="text-3xl font-medium">Lista de tareas</h1>
        </div>
      </div>

      <div
        id="tasks"
        class="my-5 h-64 overflow-auto break-words scrollbar scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full scrollbar-w-1"
      >
        <!-- tasks -->

        <div
          class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150"
          v-for="task in colageTaks.tasks.value"
          v-bind:key="task.theme"
        >
          <div class="inline-flex items-center space-x-2">
            <div>
              <svg
                v-on:click="task.check = check(task.check)"
                v-if="task.check"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-slate-500 hover:scale-125 transition hover:text-indigo-600 hover:cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                v-else
                v-on:click="task.check = check(task.check)"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-slate-500 cursor-pointer hover:scale-125 transition hover:text-slate-700"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div v-bind:class="changeStyle(task.check)">{{ task.task }}</div>
          </div>
          <div>
            <svg
              v-on:click="deleteTask"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-slate-500 hover:scale-125 transition hover:text-slate-700 hover:cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <icons-vue @click="open = true" />

  <modal-task @information="colageTaks.addTaskFront" :open="open" @close="open = false" :id="id" />
  <!-- <modal-task :open="open" @close="open = false" :id="id" /> -->
</template>

<script lang="ts" setup>
import { extractTask } from '@/modules/projects/store/listTaks';
import { ref } from 'vue';
import IconsVue from './IconsVue.vue';
import ModalTask from './ModalTask.vue';

interface Props {
  id: string;
}

const open = ref<boolean>(false);

const datas = defineProps<Props>();

const check = (v: any) => {
  console.log(datas.id);
  return (v = !v);
};

const changeStyle = (v: any) => {
  return v === true ? 'text-black font-bold' : 'text-slate-500 line-through';
};

const deleteTask = () => {
  console.log('eliminar');
};

const colageTaks = await extractTask(datas.id);

//console.log(colageTaks.tasks.value);
</script>
