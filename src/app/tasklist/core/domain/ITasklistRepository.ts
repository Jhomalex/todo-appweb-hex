import { TasklistId } from './entity/properties/TasklistId';
import { TasklistEntity } from './entity/TasklistEntity';

export interface ITasklistRepository {
	create(tasklist: TasklistEntity): Promise<TasklistEntity>;
	delete(tasklist: TasklistEntity): Promise<TasklistEntity>;
	update(tasklist: TasklistEntity): Promise<TasklistEntity>;
	list(): Promise<TasklistEntity[]>;
	getById(tasklistId: TasklistId): Promise<TasklistEntity>;
}
