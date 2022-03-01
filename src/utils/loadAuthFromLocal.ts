import LocalStorage from '@/app/shared/core/domain/LocalStorage';
import { Nullable } from '@/app/shared/core/domain/valueObjects/Nullable';
import { UserEntity } from '@/app/user/core/domain/entity/UserEntity';
import { User } from '@/app/user/core/domain/entity/UserPrimitive';
import { authStore } from '@/store/authStore';

export const loadAuthFromLocal = () => {
	const localStorage = new LocalStorage();
	const { updateAuthStates } = authStore();

	const userLoggedLS = localStorage.getItem('userLogged');
	const tokenLS = localStorage.getItem('token');

	const userLogged: Nullable<User> = userLoggedLS
		? JSON.parse(JSON.stringify(userLoggedLS))
		: null;
	const token = tokenLS ? JSON.stringify(tokenLS) : null;

	if (userLogged && token) {
		updateAuthStates({
			userLogged: UserEntity.fromPrimitives(userLogged),
			token: token,
		});
	}
};
