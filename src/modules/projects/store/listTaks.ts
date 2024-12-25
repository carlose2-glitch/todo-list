//import { createTask } from '@/modules/auth/actions';
import { createTask, getTasks } from '@/modules/auth/actions';
//import type { taskApi } from '@/modules/interfaces/getTaks.interfaces';
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

export const addTask = (
  iduser: string,
  task: string,
  date: string,
  theme: string,
  check: boolean,
) => {
  return createTask(iduser, task, date, theme, check);
};

export const extractTask = () => {
  //const extract: taskApi[] = await getTasks(id);
  const projects = ref<taskList[]>(initialApi());

  const addTaskFront = (task: string, date: string, theme: string, check: boolean) => {
    projects.value.push({
      task: task,
      date: date,
      theme: theme,
      check: check,
    });
  };
  /*  const addtask = (
    //iduser: string,
    task: string,
    date: string,
    theme: string,
    check: boolean,
  ) => {
     projects.value.push({
      task: task,
      date: date,
      theme: theme,
      check: check,
    });

    //await createTask(iduser, task, date, theme, check);

    console.log(projects.value);
  };*/

  return {
    tasks: computed(() => [...projects.value]),
    addTaskFront,
  };
};
