import { extractLocalStorage } from '@/modules/auth/actions';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const extractLocal = localStorage.getItem('token');
  // const consult = await extractLocalStorage(extractLocal);

  if (extractLocal) {
    try {
      await extractLocalStorage(extractLocal);
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    return next();
  }
  return next({ name: 'listTask' });
};

export default isAuthenticatedGuard;
