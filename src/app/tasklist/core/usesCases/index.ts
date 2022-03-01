import { TasklistRepository } from '../../dataSources/TasklistRepository';
import { CreateTasklistInteractor } from './CreateTasklistInteractor';
import { DeleteTasklistInteractor } from './DeleteTasklistInteractor';
import { GetTasklistByIdInteractor } from './GetTasklistByIdInteractor';
import { ListTasklistInteractor } from './ListTasklistInteractor';
import { UpdateTasklistInteractor } from './UpdateTasklistInteractor';

const tasklistRepo = new TasklistRepository();

export const createTasklistInteractor = new CreateTasklistInteractor(
	tasklistRepo
);
export const deleteTasklistInteractor = new DeleteTasklistInteractor(
	tasklistRepo
);
export const getTasklistByIdInteractor = new GetTasklistByIdInteractor(
	tasklistRepo
);
export const listTasklistInteractor = new ListTasklistInteractor(tasklistRepo);
export const updateTasklistInteractor = new UpdateTasklistInteractor(
	tasklistRepo
);
