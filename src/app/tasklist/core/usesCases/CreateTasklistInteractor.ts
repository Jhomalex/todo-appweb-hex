import { TasklistIsPublic } from '../domain/entity/properties/TasklistIsPublic';
import { TasklistName } from '../domain/entity/properties/TasklistName';
import { ITasklistRepository } from '../domain/ITasklistRepository';
import { TasklistEntity } from '@/app/tasklist/core/domain/entity/TasklistEntity';
import { TasklistId } from '../domain/entity/properties/TasklistId';
import { CreatedAt } from '@/app/shared/core/domain/valueObjects/CreatedAt';
import { UpdatedAt } from '@/app/shared/core/domain/valueObjects/UpdatedAt';

export class CreateTasklistInteractor {
	constructor(private tasklistRepo: ITasklistRepository) {}

	async run(name: TasklistName) {
		let tasklist = TasklistEntity.create({
			id: TasklistId.random(),
			isPublic: new TasklistIsPublic(false),
			name,
			createdAt: CreatedAt.now(),
			updatedAt: UpdatedAt.now(),
		});
		tasklist = await this.tasklistRepo.create(tasklist);
		return tasklist;
	}
}
