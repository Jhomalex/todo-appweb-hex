export interface UpdateTasklistDTO {
	data: Data;
}

interface Data {
	updateTasklist: UpdateTasklist;
}

interface UpdateTasklist {
	__typename: string;
	id: string;
	name: string;
	isPublic: boolean;
	createdAt: Date;
	updatedAt: Date;
	reason?: string;
}
