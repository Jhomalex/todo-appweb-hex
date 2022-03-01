import { UserName } from './entity/properties/UserName';
import { UserPassword } from './entity/properties/UserPassword';
import { UserUsername } from './entity/properties/UserUsername';
import { UserEntity } from './entity/UserEntity';

export interface IUserRepository {
	signin(params: {
		username: UserUsername;
		password: UserPassword;
	}): Promise<{ user: UserEntity; token: string }>;
	signup(params: {
		username: UserUsername;
		password: UserPassword;
		name: UserName;
	}): Promise<UserEntity>;
}
