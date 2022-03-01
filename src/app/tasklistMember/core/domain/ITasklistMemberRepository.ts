import { TasklistMemberEntity } from './entity/TasklistMemberEntity';

export interface ITasklistMemberRepository {
	create(tasklistMember: TasklistMemberEntity): Promise<TasklistMemberEntity>;
	delete(tasklistMember: TasklistMemberEntity): Promise<TasklistMemberEntity>;
}
