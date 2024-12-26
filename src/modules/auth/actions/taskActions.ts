import { usersApis } from '@/api/apis';
//crear tarea
export const createTask = async (
  iduser: string,
  task: string,
  date: string,
  theme: string,
  check: boolean,
) => {
  try {
    const { data } = await usersApis.post('/users/createTask', {
      iduser,
      task,
      date,
      theme,
      check,
    });

    return data;
  } catch (error) {
    throw new Error('Error interno');
  }
};
//obtener tareas del usuario
export const getTasks = async (id: string) => {
  try {
    const { data } = await usersApis.get(`/users/extractTask/${id}`);
    return data;
  } catch (error) {
    throw new Error('Error interno');
  }
};

export const deleteTask = async (id: string) => {
  try {
    const { data } = await usersApis.delete(`/users/deleteTask/${id}`);
    return data;
  } catch (error) {
    throw new Error('Error interno');
  }
};
