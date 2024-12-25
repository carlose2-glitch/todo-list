<template>
  <div
    v-if="open"
    class="flex overflow-y-auto overflow-x-hidden fixed top-0 bg-gray-500/75 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full"
  >
    <form @submit.prevent="submitValue" class="w-full flex justify-center">
      <div class="relative p-4 w-[90%] md:w-[42rem] max-h-full animate-buttonHamburguer">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <button
              @click="$emit('close')"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4">
            <div class="mb-5">
              <input
                ref="inputRef"
                required
                v-model="data.task"
                type="text"
                name="tarea"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Ingresa tu tarea"
              />
            </div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tema</label>
            <select
              id="themes"
              v-model="data.theme"
              class="mt-1 px-3 py-2 font-bold bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            >
              <option selected value="work">Trabajo</option>
              <option value="personal">Personal</option>
              <option value="wish">Deseo</option>
              <option value="birthday">Cumpleaños</option>
            </select>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Fecha</label
            >
            <div class="relative max-w-sm">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </div>
              <input
                v-model="data.date"
                id="default-datepicker"
                type="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              data-modal-hide="default-modal"
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

interface Props {
  open: boolean;
  id: string;
}

const datas = defineProps<Props>();

const emits = defineEmits<{
  close: [void];
  information: [iduser: string, task: string, date: string, theme: string, check: boolean];
}>();

interface values {
  task: string;
  theme: string;
  date: string;
}

const task = ref<string>('');
const theme = ref<string>('work');
const date = ref<string>('');

const data: values = reactive({
  task: task,
  theme: theme,
  date: date,
});
const inputRef = ref<HTMLInputElement | null>(null);

const submitValue = () => {
  /*const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const fullDate = day.toString() + '-' + month.toString() + '-' + year.toString();
*/
  if (data.task.trim() !== '' && data.date !== '') {
    const invertDate = data.date.split('-').reverse().join('-');
    console.log(data.task);
    console.log(datas.id);

    emits('information', datas.id, data.task, invertDate, data.theme, true);
    data.task = '';
    data.date = '';

    emits('close');

    return;
  }
  data.task = '';
  inputRef.value?.focus();
};
</script>
