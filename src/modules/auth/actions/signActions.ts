import { usersApis } from '@/api/apis';

//get all users
/*export const verificationUser = async () => {
  try {
    const { data } = await usersApis.get('/users');
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('error interno');
  }
};*/

//create User

export const createUser = async (
  ci: number,
  name: string,
  lastname: string,
  user: string,
  password: string,
) => {
  try {
    const { data } = await usersApis.post(
      '/users',
      { ci, name, lastname, user, password },
      { withCredentials: true },
    );
    return data;
  } catch (error) {
    throw new Error('error interno');
  }
};

//guardar cookie
/*
export const saveCookie = async (token: string) => {
  try {
    const { data } = await usersApis.get(`/users/${token}`);
    return data;
  } catch (error) {
    throw new Error('error');
  }
};*/

//extraer valores del local storage

export const extractLocalStorage = async (token: string) => {
  try {
    const { data } = await usersApis.get(`/users/${token}`);
    return data;
  } catch (error) {
    throw new Error('error');
  }
};
