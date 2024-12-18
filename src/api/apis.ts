import axios from 'axios';

const usersApis = axios.create({
  baseURL: import.meta.env.VITE_URL_USERS_LOCAL,
});

export { usersApis };
