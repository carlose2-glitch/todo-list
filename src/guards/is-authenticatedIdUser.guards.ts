import { extractLocalStorage } from '@/modules/auth/actions';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedIdUser = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const extractLocal = localStorage.getItem('token');
  console.log(extractLocal);

  if (extractLocal) {
    try {
      await extractLocalStorage(extractLocal);
    } catch (error) {
      console.log(error);
      return next({ name: 'home' });
    }
  } else {
    return next({ name: 'home' });
  }
  return next();
};

export default isAuthenticatedIdUser;
