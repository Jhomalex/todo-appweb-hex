import { TasklistEntity } from '../domain/entity/TasklistEntity';
import { ITasklistRepository } from '../domain/ITasklistRepository';

export class UpdateTasklistInteractor {
	constructor(private tasklistRepo: ITasklistRepository) {}

	async run(tasklist: TasklistEntity) {
		const tl = await this.tasklistRepo.update(tasklist);
		return tl;
	}
}
