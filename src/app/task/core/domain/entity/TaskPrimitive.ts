export type Task = {
	id: string;
	name: string;
	description: string;
	isFinished: boolean;
	finishedDate: Date | null;
	tasklistId: string;
	createdAt: Date;
	updatedAt: Date;
};
