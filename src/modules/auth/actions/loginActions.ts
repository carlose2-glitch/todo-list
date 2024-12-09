import { usersApis } from '@/api/apis';

export const loginUser = async (user: string, password: string) => {
  try {
    const { data } = await usersApis.post('/users/login', { user, password });

    return data;
  } catch (error) {
    throw new Error('Error interno');
  }
};
