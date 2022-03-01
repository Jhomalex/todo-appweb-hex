import { TasklistMemberEntity } from '../domain/entity/TasklistMemberEntity';
import { ITasklistMemberRepository } from '../domain/ITasklistMemberRepository';

export class DeleteTasklistMemberInteractor {
	constructor(private tasklistMemberRepo: ITasklistMemberRepository) {}

	async run(tasklistMember: TasklistMemberEntity) {
		return await this.tasklistMemberRepo.delete(tasklistMember);
	}
}
