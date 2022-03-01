import { InvalidException } from '@/app/shared/core/domain/InvalidException';
import { Repository } from '@/app/shared/dataSources/Repository';
import { UserName } from '../core/domain/entity/properties/UserName';
import { UserPassword } from '../core/domain/entity/properties/UserPassword';
import { UserUsername } from '../core/domain/entity/properties/UserUsername';
import { UserEntity } from '../core/domain/entity/UserEntity';
import { IUserRepository } from '../core/domain/IUserRepository';
import { SigninDTO } from './dtos/SigninDto';
import { SignupDTO } from './dtos/SignupDTO';
import { signinQuery } from './operations/signinQuery';
import { signupMutation } from './operations/signupMutation';

export class UserRepository extends Repository implements IUserRepository {
	async signin(params: {
		username: UserUsername;
		password: UserPassword;
	}): Promise<{ user: UserEntity; token: string }> {
		const vars = {
			username: params.username.value,
			password: params.password.value,
		};
		const serverRes: SigninDTO = await this.urqlClient
			.query(signinQuery, vars)
			.toPromise();

		if (!serverRes.data)
			throw new InvalidException('Could not connect to server');

		if (serverRes.data.signin.reason)
			throw new InvalidException(serverRes.data.signin.reason);

		return {
			user: UserEntity.fromPrimitives(serverRes.data.signin.user),
			token: serverRes.data.signin.token,
		};
	}

	async signup(params: {
		username: UserUsername;
		password: UserPassword;
		name: UserName;
	}): Promise<UserEntity> {
		const vars = {
			username: params.username.value,
			password: params.password.value,
			name: params.name.value,
		};
		const serverRes: SignupDTO = await this.urqlClient
			.query(signupMutation, vars)
			.toPromise();

		if (!serverRes.data)
			throw new InvalidException('Could not connect to server');

		if (serverRes.data.signup.reason)
			throw new InvalidException(serverRes.data.signup.reason);

		return UserEntity.fromPrimitives({ ...serverRes.data.signup });
	}

	constructor() {
		super();
	}
}
