export interface DeleteTasklistDTO {
	data: Data;
}

interface Data {
	deleteTasklist: DeleteTasklist;
}

interface DeleteTasklist {
	__typename: string;
	id: string;
	name: string;
	isPublic: boolean;
	createdAt: Date;
	updatedAt: Date;
	reason?: string;
}
