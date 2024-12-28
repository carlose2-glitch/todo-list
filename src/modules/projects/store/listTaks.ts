//import { createTask } from '@/modules/auth/actions';
import { checkTaskValues, createTask, deleteTask, getTasks } from '@/modules/auth/actions';
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

export const extractTask = async (id: string, them: string) => {
  const extract: taskApi[] = await getTasks(id);
  const projects = ref<taskApi[]>(extract);
  const projectsSelect = ref<taskApi[]>([]);
  const themeValue = ref('');

  const projectsSelectFunction = (t: string) => {
    themeValue.value = t;
    projectsSelect.value = projects.value.filter((Element) => Element.theme === t);

    if (t === 'all') {
      projectsSelect.value = projects.value;
    } else {
      projectsSelect.value = projects.value.filter((Element) => Element.theme === t);
    }
  };
  projectsSelectFunction(them);

  //agregar tarea
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

    projectsSelectFunction(themeValue.value);
  };

  const deleteTaskk = async (id: string) => {
    //econtrar el indice de la tarea
    const find = projects.value.findIndex((Element) => Element._id === id);
    //borrar la tarea front
    projects.value.splice(find, 1);
    //borrar la tarea backend
    projectsSelectFunction(themeValue.value);

    await deleteTask(id);
  };

  const checkTask = async (id: string, check: boolean) => {
    const find = projects.value.findIndex((Element) => Element._id === id);
    projects.value[find].check = check;

    await checkTaskValues(id, check);
  };

  return {
    tasks: computed(() => [...projectsSelect.value]),
    addTaskFront,
    deleteTaskk,
    projectsSelectFunction,
    checkTask,
  };
};
