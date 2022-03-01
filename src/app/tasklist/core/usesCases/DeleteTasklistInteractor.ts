import { TasklistEntity } from '../domain/entity/TasklistEntity';
import { ITasklistRepository } from '../domain/ITasklistRepository';

export class DeleteTasklistInteractor {
	constructor(private tasklistRepo: ITasklistRepository) {}

	async run(tasklist: TasklistEntity) {
		const tl = await this.tasklistRepo.delete(tasklist);
		return tl;
	}
}
