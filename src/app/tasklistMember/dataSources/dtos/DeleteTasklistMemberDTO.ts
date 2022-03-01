export type DeleteTasklistMemberDTO = {
	deleteTasklistMember: DeleteTasklistMember;
};

type DeleteTasklistMember = {
	__typename: string;
	reason?: string;
	userId: string;
	tasklistId: string;
	createdAt: Date;
	updatedAt: Date;
};
