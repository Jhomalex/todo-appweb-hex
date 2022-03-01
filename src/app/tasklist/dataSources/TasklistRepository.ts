import { InvalidException } from '@/app/shared/core/domain/InvalidException';
import { Repository } from '@/app/shared/dataSources/Repository';
import { TasklistId } from '../core/domain/entity/properties/TasklistId';
import { TasklistEntity } from '../core/domain/entity/TasklistEntity';
import { ITasklistRepository } from '../core/domain/ITasklistRepository';
import { CreateTasklistDTO } from './dtos/createTasklistDto';
import { DeleteTasklistDTO } from './dtos/deleteTasklistDto';
import { GetTasklistByIdDto } from './dtos/getTasklistByIdDto';
import { ListTasklistDTO } from './dtos/listTasklistDto';
import { UpdateTasklistDTO } from './dtos/updateTasklistDTO';
import { createTasklistMutation } from './operations/createTasklistMutation';
import { deleteTasklistMutation } from './operations/deleteTasklistMutation';
import { getTasklistByIdQuery } from './operations/getTasklistByIdQuery';
import { listTasklistQuery } from './operations/listTasklistQuery';
import { updateTasklistMutation } from './operations/updateTasklistMutation';
import { pipe, subscribe } from 'wonka';

export class TasklistRepository
	extends Repository
	implements ITasklistRepository
{
	async createSub(): Promise<void> {
		const serverRes = pipe(
			await this.urqlClient.subscription(createTasklistMutation),
			subscribe(r => r.data)
		).unsubscribe;
	}

	async create(tasklist: TasklistEntity): Promise<TasklistEntity> {
		const vars = { name: tasklist.name.value };
		const serverRes: CreateTasklistDTO = await this.urqlClient
			.mutation(createTasklistMutation, vars)
			.toPromise();

		if (!serverRes.data)
			throw new InvalidException('Could not connect to server');

		if (serverRes.data.createTasklist.reason)
			throw new InvalidException(serverRes.data.createTasklist.reason);

		return TasklistEntity.fromPrimitives({
			...serverRes.data.createTasklist,
		});
	}

	async delete(tasklist: TasklistEntity): Promise<TasklistEntity> {
		const vars = { tasklistId: tasklist.id.value };
		const serverRes: DeleteTasklistDTO = await this.gqlClient.request(
			deleteTasklistMutation,
			vars
		);

		if (serverRes.data.deleteTasklist.reason)
			throw new InvalidException(serverRes.data.deleteTasklist.reason);

		return TasklistEntity.fromPrimitives({
			...serverRes.data.deleteTasklist,
		});
	}

	async update(tasklist: TasklistEntity): Promise<TasklistEntity> {
		const vars = {
			tasklistId: tasklist.id.value,
			name: tasklist.name.value,
			isPublic: tasklist.isPublic.value,
		};
		const serverRes: UpdateTasklistDTO = await this.gqlClient.request(
			updateTasklistMutation,
			vars
		);

		if (serverRes.data.updateTasklist.reason)
			throw new InvalidException(serverRes.data.updateTasklist.reason);

		return TasklistEntity.fromPrimitives({
			...serverRes.data.updateTasklist,
		});
	}

	async list(): Promise<TasklistEntity[]> {
		const serverRes: ListTasklistDTO = await this.urqlClient
			.query(listTasklistQuery)
			.toPromise();
		if (!serverRes.data)
			throw new InvalidException('Could not connect to server');

		if (serverRes.data.listTasklist.reason)
			throw new InvalidException(serverRes.data.listTasklist.reason);

		return serverRes.data.listTasklist.tasklists.map(tl =>
			TasklistEntity.fromPrimitives(tl)
		);
	}

	async getById(tasklistId: TasklistId): Promise<TasklistEntity> {
		const vars = { tasklistId };
		const serverRes: GetTasklistByIdDto = await this.gqlClient.request(
			getTasklistByIdQuery,
			vars
		);

		if (serverRes.data.getTasklistById.reason)
			throw new InvalidException(serverRes.data.getTasklistById.reason);

		return TasklistEntity.fromPrimitives({
			id: serverRes.data.getTasklistById.id,
			name: serverRes.data.getTasklistById.name,
			isPublic: serverRes.data.getTasklistById.isPublic,
			createdAt: serverRes.data.getTasklistById.createdAt,
			updatedAt: serverRes.data.getTasklistById.updatedAt,
		});
	}

	constructor() {
		super();
	}
}
