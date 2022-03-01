import { UserName } from '../domain/entity/properties/UserName';
import { UserPassword } from '../domain/entity/properties/UserPassword';
import { UserUsername } from '../domain/entity/properties/UserUsername';
import { IUserRepository } from '../domain/IUserRepository';

export class SignupInteractor {
	constructor(private userRepo: IUserRepository) {}

	async run(props: {
		username: UserUsername;
		password: UserPassword;
		name: UserName;
	}) {
		const user = await this.userRepo.signup({
			username: props.username,
			password: props.password,
			name: props.name,
		});

		return user;
	}
}
