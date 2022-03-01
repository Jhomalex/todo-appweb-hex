import { User } from '@/app/user/core/domain/entity/UserPrimitive';

export type UserToken = {
	user: User;
	token: string;
};
