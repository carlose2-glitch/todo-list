//import { createTask } from '@/modules/auth/actions';
import { createTask, deleteTask, getTasks } from '@/modules/auth/actions';
import type { taskApi } from '@/modules/interfaces/getTaks.interfaces';
// import type { taskList } from '@/modules/interfaces/task.interfaces';

import { computed, ref } from 'vue';

/*const initialApi = (): taskList[] => {
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
};*/

const addTask = (iduser: string, task: string, date: string, theme: string, check: boolean) => {
  return createTask(iduser, task, date, theme, check);
};

export const extractTask = async (id: string) => {
  const extract: taskApi[] = await getTasks(id);
  const projects = ref<taskApi[]>(extract);

  console.log(projects.value);

  const addTaskFront = async (
    _id: string,
    iduser: string,
    task: string,
    date: string,
    theme: string,
    check: boolean,
  ) => {
    const idTask = await addTask(iduser, task, date, theme, check);

    projects.value.push({
      _id: idTask._id,
      iduser: iduser,
      task: task,
      date: date,
      theme: theme,
      check: check,
    });
  };

  const deleteTaskk = async (id: string) => {
    //econtrar el indice de la tarea
    const find = projects.value.findIndex((Element) => Element._id === id);
    //borrar la tarea front
    projects.value.splice(find, 1);
    //borrar la tarea backend

    await deleteTask(id);
  };

  return {
    tasks: computed(() => [...projects.value]),
    addTaskFront,
    deleteTaskk,
  };
};
