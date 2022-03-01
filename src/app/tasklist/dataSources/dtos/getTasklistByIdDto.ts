export interface GetTasklistByIdDto {
	data: Data;
}

interface Data {
	getTasklistById: GetTasklistByID;
}

interface GetTasklistByID {
	__typename: string;
	id: string;
	name: string;
	isPublic: boolean;
	tasklistMembers: TasklistMember[];
	createdAt: Date;
	updatedAt: Date;
	reason?: string;
}

interface TasklistMember {
	userId: string;
	tasklistId: string;
	user: User;
}

interface User {
	id: string;
	name: string;
	username: string;
	avatar: string;
}
