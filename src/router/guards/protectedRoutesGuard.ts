import { authStore } from '@/store/authStore';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const protectedRoutesGuard = (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) => {
	const { isLoggedin } = authStore();

	if (to.name !== 'signin' && !isLoggedin.value) next({ name: 'signin' });
	else next();
};
