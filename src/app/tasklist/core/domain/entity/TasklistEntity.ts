import { Entity } from '@/app/shared/core/domain/Entity';
import { CreatedAt } from '@/app/shared/core/domain/valueObjects/CreatedAt';
import { UpdatedAt } from '@/app/shared/core/domain/valueObjects/UpdatedAt';
import { TasklistMemberEntity } from '@/app/tasklistMember/core/domain/entity/TasklistMemberEntity';
import { TasklistMember } from '@/app/tasklistMember/core/domain/entity/TasklistMemberPrimitive';
import { TasklistId } from './properties/TasklistId';
import { TasklistIsPublic } from './properties/TasklistIsPublic';
import { TasklistName } from './properties/TasklistName';
import { Tasklist } from './TasklistPrimitive';

export class TasklistEntity extends Entity {
	static create(props: {
		id: TasklistId;
		name: TasklistName;
		isPublic: TasklistIsPublic;
		createdAt: CreatedAt;
		updatedAt: UpdatedAt;
		tasklistMembers?: TasklistMemberEntity[];
	}) {
		return new TasklistEntity(
			props.id,
			props.name,
			props.isPublic,
			props.createdAt,
			props.updatedAt,
			props.tasklistMembers
		);
	}

	static fromPrimitives(
		props: Tasklist & { tasklistMembers?: TasklistMember[] }
	) {
		return TasklistEntity.create({
			id: new TasklistId(props.id),
			name: new TasklistName(props.name),
			isPublic: new TasklistIsPublic(props.isPublic),
			createdAt: new CreatedAt(props.createdAt),
			updatedAt: new UpdatedAt(props.updatedAt),
			tasklistMembers: props.tasklistMembers
				? props.tasklistMembers.map(tlm =>
						TasklistMemberEntity.fromPrimitives(tlm)
				  )
				: undefined,
		});
	}

	toPrimitives(): Tasklist & { tasklistMembers?: TasklistMember[] } {
		return {
			id: this._id.value,
			name: this._name.value,
			isPublic: this._isPublic.value,
			createdAt: this._createdAt.value,
			updatedAt: this._updatedAt.value,
			tasklistMembers: this.tasklistMembers?.map(tlm => tlm.toPrimitives()),
		};
	}

	self(): TasklistEntity {
		return this;
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
	get isPublic(): TasklistIsPublic {
		return this._isPublic;
	}
	set isPublic(value: TasklistIsPublic) {
		this._isPublic = value;
	}
	get name(): TasklistName {
		return this._name;
	}
	set name(value: TasklistName) {
		this._name = value;
	}
	get id(): TasklistId {
		return this._id;
	}
	set id(value: TasklistId) {
		this._id = value;
	}
	private constructor(
		private _id: TasklistId,
		private _name: TasklistName,
		private _isPublic: TasklistIsPublic,
		private _createdAt: CreatedAt,
		private _updatedAt: UpdatedAt,
		readonly tasklistMembers?: TasklistMemberEntity[]
	) {
		super();
	}
}
