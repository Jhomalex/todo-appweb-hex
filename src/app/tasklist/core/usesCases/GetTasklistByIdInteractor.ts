import { TasklistId } from '../domain/entity/properties/TasklistId';
import { ITasklistRepository } from '../domain/ITasklistRepository';

export class GetTasklistByIdInteractor {
	constructor(private tasklistRepo: ITasklistRepository) {}

	async run(tasklistId: TasklistId) {
		const tl = await this.tasklistRepo.getById(tasklistId);
		return tl;
	}
}
