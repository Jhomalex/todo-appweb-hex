import { TasklistId } from '@/app/tasklist/core/domain/entity/properties/TasklistId';
import { TaskEntity } from './entity/TaskEntity';

export interface ITaskRepository {
	create(task: TaskEntity): Promise<TaskEntity>;
	update(task: TaskEntity): Promise<TaskEntity>;
	delete(task: TaskEntity): Promise<TaskEntity>;
	list(tasklistId: TasklistId): Promise<TaskEntity[]>;
}
