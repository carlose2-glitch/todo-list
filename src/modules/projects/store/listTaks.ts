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

const projects = ref<taskList[]>(initialApi());

export const extractTask = () => {
  const addtask = (task: string, date: string, theme: string, check: boolean) => {
    projects.value.push({
      task: task,
      date: date,
      theme: theme,
      check: check,
    });

    console.log(projects.value);
  };

  return {
    tasks: computed(() => [...projects.value]),
    addtask,
  };
};
