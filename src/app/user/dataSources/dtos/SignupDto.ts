export type SignupDTO = {
	data?: Data;
};

type Data = {
	signup: Signup;
};

type Signup = {
	__typename: string;
	id: string;
	name: string;
	username: string;
	avatar: string;
	createdAt: Date;
	updatedAt: Date;
	reason?: string;
};
