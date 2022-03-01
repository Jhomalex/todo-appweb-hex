import { TasklistMemberEntity } from '../domain/entity/TasklistMemberEntity';
import { ITasklistMemberRepository } from '../domain/ITasklistMemberRepository';

export class CreateTasklistMemberInteractor {
	constructor(private tasklistMemberRepo: ITasklistMemberRepository) {}

	async run(tasklistMember: TasklistMemberEntity) {
		return await this.tasklistMemberRepo.create(tasklistMember);
	}
}
