import { createRouter, createWebHistory } from 'vue-router';
import SigninPage from '../pages/SigninPage.vue';
import SignupPage from '../pages/SignupPage.vue';
import MainPage from '../pages/MainPage.vue';
import { unprotectedRoutesGuard } from './guards/unprotectedRoutesGuard';
import { protectedRoutesGuard } from './guards/protectedRoutesGuard';

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/signin',
			name: 'signin',
			component: SigninPage,
			beforeEnter: unprotectedRoutesGuard,
		},
		{
			path: '/signup',
			name: 'signup',
			component: SignupPage,
			beforeEnter: unprotectedRoutesGuard,
		},
		{
			path: '/',
			name: 'main',
			component: MainPage,
			beforeEnter: protectedRoutesGuard,
		},
	],
});
