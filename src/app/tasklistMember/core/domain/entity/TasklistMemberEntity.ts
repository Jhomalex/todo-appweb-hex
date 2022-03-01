import { Entity } from '@/app/shared/core/domain/Entity';
import { CreatedAt } from '@/app/shared/core/domain/valueObjects/CreatedAt';
import { UpdatedAt } from '@/app/shared/core/domain/valueObjects/UpdatedAt';
import { TasklistId } from '@/app/tasklist/core/domain/entity/properties/TasklistId';
import { UserId } from '@/app/user/core/domain/entity/properties/UserId';
import { UserEntity } from '@/app/user/core/domain/entity/UserEntity';
import { User } from '@/app/user/core/domain/entity/UserPrimitive';
import { TasklistMember } from './TasklistMemberPrimitive';

export class TasklistMemberEntity extends Entity {
	static create(props: {
		userId: UserId;
		tasklistId: TasklistId;
		createdAt: CreatedAt;
		updatedAt: UpdatedAt;
		user?: UserEntity;
	}) {
		return new TasklistMemberEntity(
			props.userId,
			props.tasklistId,
			props.createdAt,
			props.updatedAt,
			props.user
		);
	}

	static fromPrimitives(
		props: TasklistMember & { user?: User }
	): TasklistMemberEntity {
		return TasklistMemberEntity.create({
			userId: new UserId(props.userId),
			tasklistId: new TasklistId(props.tasklistId),
			createdAt: new CreatedAt(props.createdAt),
			updatedAt: new UpdatedAt(props.updatedAt),
			user: props.user ? UserEntity.fromPrimitives(props.user) : undefined,
		});
	}

	toPrimitives(): TasklistMember & { user?: User } {
		return {
			userId: this._userId.value,
			tasklistId: this._tasklistId.value,
			createdAt: this._createdAt.value,
			updatedAt: this._updatedAt.value,
			user: this.user?.toPrimitives(),
		};
	}

	get updatedAt(): UpdatedAt {
		return this._updatedAt;
	}
	set updatedAt(value: UpdatedAt) {
		this._updatedAt = value;
	}
	get createdAt(): CreatedAt {
		return this._createdAt;
	}
	set createdAt(value: CreatedAt) {
		this._createdAt = value;
	}
	get tasklistId(): TasklistId {
		return this._tasklistId;
	}
	set tasklistId(value: TasklistId) {
		this._tasklistId = value;
	}
	get userId(): UserId {
		return this._userId;
	}
	set userId(value: UserId) {
		this._userId = value;
	}
	private constructor(
		private _userId: UserId,
		private _tasklistId: TasklistId,
		private _createdAt: CreatedAt,
		private _updatedAt: UpdatedAt,
		readonly user?: UserEntity
	) {
		super();
	}
}
