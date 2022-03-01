import { InvalidException } from '@/app/shared/core/domain/InvalidException';
import { Repository } from '@/app/shared/dataSources/Repository';
import { createTasklistMutation } from '@/app/tasklist/dataSources/operations/createTasklistMutation';
import { deleteTasklistMutation } from '@/app/tasklist/dataSources/operations/deleteTasklistMutation';
import { TasklistMemberEntity } from '../core/domain/entity/TasklistMemberEntity';
import { ITasklistMemberRepository } from '../core/domain/ITasklistMemberRepository';
import { CreateTasklistMemberDTO } from './dtos/CreateTasklistMemberDTO';
import { DeleteTasklistMemberDTO } from './dtos/DeleteTasklistMemberDTO';

export class TasklistMemberRepository
	extends Repository
	implements ITasklistMemberRepository
{
	async create(
		tasklistMember: TasklistMemberEntity
	): Promise<TasklistMemberEntity> {
		const vars = {
			userId: tasklistMember.userId.value,
			tasklistId: tasklistMember.tasklistId.value,
		};
		const serverRes: CreateTasklistMemberDTO = await this.gqlClient.request(
			createTasklistMutation,
			vars
		);

		if (serverRes.createTasklistMember.reason)
			throw new InvalidException(serverRes.createTasklistMember.reason);

		return TasklistMemberEntity.fromPrimitives(serverRes.createTasklistMember);
	}
	async delete(
		tasklistMember: TasklistMemberEntity
	): Promise<TasklistMemberEntity> {
		const vars = {
			userId: tasklistMember.userId.value,
			tasklistId: tasklistMember.tasklistId.value,
		};
		const serverRes: DeleteTasklistMemberDTO = await this.gqlClient.request(
			deleteTasklistMutation,
			vars
		);

		if (serverRes.deleteTasklistMember.reason)
			throw new InvalidException(serverRes.deleteTasklistMember.reason);

		return TasklistMemberEntity.fromPrimitives(serverRes.deleteTasklistMember);
	}
}
