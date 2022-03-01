import { authStore } from '@/store/authStore';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const unprotectedRoutesGuard = (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) => {
	const { isLoggedin } = authStore();

	const unprotectedRoutes = ['signin', 'signup'];
	const originRouteName = to.name?.toString() || 'signin';

	if (unprotectedRoutes.indexOf(originRouteName) !== -1 && isLoggedin.value)
		next({ name: 'main' });
	else next();
};
