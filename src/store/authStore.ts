import LocalStorage from '@/app/shared/core/domain/LocalStorage';
import { UserPassword } from '@/app/user/core/domain/entity/properties/UserPassword';
import { UserUsername } from '@/app/user/core/domain/entity/properties/UserUsername';
import { UserEntity } from '@/app/user/core/domain/entity/UserEntity';
import { signinInteractor } from '@/app/user/core/usesCases';
import { computed, readonly, Ref, ref } from 'vue';

const userLogged: Ref<UserEntity | null> = ref(null);

export const authStore = () => {
	const signin = async (params: {
		username: UserUsername;
		password: UserPassword;
	}): Promise<string> => {
		const localStorage = new LocalStorage();
		const res = await signinInteractor.run({
			username: params.username,
			password: params.password,
		});

		userLogged.value = res.user;

		localStorage.setItem('userLogged', JSON.stringify(res.user.toPrimitives()));
		localStorage.setItem('token', `JWT ${res.token}`);

		return 'User signedin successfully';
	};

	const signout = (): string => {
		const localStorage = new LocalStorage();

		userLogged.value = null;

		localStorage.removeItem('userLogged');
		localStorage.removeItem('token');

		return 'User is signedout';
	};

	const updateAuthStates = (params: {
		userLogged: UserEntity;
		token: string;
	}) => {
		userLogged.value = params.userLogged;
	};

	return {
		userLogged: readonly(userLogged),
		isLoggedin: computed(() => !!userLogged.value),
		signin,
		signout,
		updateAuthStates,
	};
};
