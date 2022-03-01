import { ITasklistRepository } from '../domain/ITasklistRepository';

export class ListTasklistInteractor {
	constructor(private tasklistRepo: ITasklistRepository) {}

	async run() {
		const tasklistList = await this.tasklistRepo.list();
		return tasklistList;
	}
}
