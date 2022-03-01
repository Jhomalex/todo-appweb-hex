export type CreateTasklistMemberDTO = {
	createTasklistMember: CreateTasklistMember;
};

type CreateTasklistMember = {
	__typename: string;
	reason?: string;
	userId: string;
	tasklistId: string;
	createdAt: Date;
	updatedAt: Date;
};
