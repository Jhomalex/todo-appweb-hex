export type SigninDTO = {
	data?: Data;
};

type Data = {
	signin: Signin;
};

type Signin = {
	__typename: string;
	user: User;
	token: string;
	reason?: string;
};

type User = {
	id: string;
	name: string;
	username: string;
	avatar: string;
	createdAt: Date;
	updatedAt: Date;
};
