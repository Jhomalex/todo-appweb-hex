export interface CreateTasklistDTO {
	data?: Data;
}

interface Data {
	createTasklist: CreateTasklist;
}

interface CreateTasklist {
	__typename: string;
	id: string;
	name: string;
	isPublic: boolean;
	createdAt: Date;
	updatedAt: Date;
	reason?: string;
}
