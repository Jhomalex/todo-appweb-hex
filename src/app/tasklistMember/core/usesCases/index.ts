import { TasklistMemberRepository } from '../../dataSources/TasklistMemberRepository';
import { CreateTasklistMemberInteractor } from './CreateTasklistMemberInteractor';
import { DeleteTasklistMemberInteractor } from './DeleteTasklistMemberInteractor';

const tasklistMemberRepo = new TasklistMemberRepository();

export const createTasklistMemberInteractor =
	new CreateTasklistMemberInteractor(tasklistMemberRepo);
export const deleteTasklistMemberInteractor =
	new DeleteTasklistMemberInteractor(tasklistMemberRepo);
