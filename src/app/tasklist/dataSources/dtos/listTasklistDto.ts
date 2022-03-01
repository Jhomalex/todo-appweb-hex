export interface ListTasklistDTO {
	data?: Data;
}

interface Data {
	listTasklist: ListTasklist;
}

interface ListTasklist {
	__typename: string;
	tasklists: Tasklist[];
	reason?: string;
}

interface Tasklist {
	id: string;
	name: string;
	isPublic: boolean;
	tasklistMembers: TasklistMember[];
	createdAt: Date;
	updatedAt: Date;
}

interface TasklistMember {
	userId: string;
	tasklistId: string;
	user: User;
	createdAt: Date;
	updatedAt: Date;
}

interface User {
	id: string;
	name: string;
	username: string;
	avatar: string;
	createdAt: Date;
	updatedAt: Date;
}
