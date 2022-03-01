import LocalStorage from '@/app/shared/core/domain/LocalStorage';
import { UserPassword } from '../domain/entity/properties/UserPassword';
import { UserUsername } from '../domain/entity/properties/UserUsername';
import { IUserRepository } from '../domain/IUserRepository';

export class SigninInteractor {
	constructor(private userRepo: IUserRepository) {}

	async run(props: { username: UserUsername; password: UserPassword }) {
		const res = await this.userRepo.signin({
			username: props.username,
			password: props.password,
		});

		return res;
	}
}
