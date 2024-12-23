import type { taskList } from '@/modules/interfaces/task.interfaces';
import { computed, ref } from 'vue';

const initialApi = (): taskList[] => {
  return [
    {
      task: 'hacer comida',
      date: '281521',
      theme: 'cumpleaños',
      check: true,
    },
    {
      task: 'hacer food',
      date: '3333',
      theme: 'hbjhbjh',
      check: true,
    },
  ];
};

export const extractTask = () => {
  const projects = ref<taskList[]>(initialApi());
  console.log(projects);

  return {
    tasks: computed(() => [...projects.value]),
  };
};
