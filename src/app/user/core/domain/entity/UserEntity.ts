import { Entity } from '@/app/shared/core/domain/Entity';
import { CreatedAt } from '@/app/shared/core/domain/valueObjects/CreatedAt';
import { UpdatedAt } from '@/app/shared/core/domain/valueObjects/UpdatedAt';
import { UserId } from './properties/UserId';
import { UserName } from './properties/UserName';
import { UserUsername } from './properties/UserUsername';
import { UserAvatar } from './properties/UserAvatar';
import { User } from './UserPrimitive';
import { env } from '@/utils/env';

export class UserEntity extends Entity {
	static create(props: {
		id: UserId;
		name: UserName;
		username: UserUsername;
		avatar: UserAvatar;
		createdAt: CreatedAt;
		updatedAt: UpdatedAt;
	}) {
		return new UserEntity(
			props.id,
			props.name,
			props.username,
			props.avatar,
			props.createdAt,
			props.updatedAt
		);
	}

	static fromPrimitives(props: User): UserEntity {
		return UserEntity.create({
			id: new UserId(props.id),
			name: new UserName(props.name),
			username: new UserUsername(props.username),
			avatar: new UserAvatar(props.avatar),
			createdAt: new CreatedAt(props.createdAt),
			updatedAt: new UpdatedAt(props.updatedAt),
		});
	}

	toPrimitives(): User {
		return {
			id: this._id.value,
			name: this._name.value,
			username: this._username.value,
			avatar: this._avatar.value,
			createdAt: this._createdAt.value,
			updatedAt: this._updatedAt.value,
		};
	}

	get uriAvatar() {
		return `${env.api.server}/${this._avatar.value}`;
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
	public get avatar(): UserAvatar {
		return this._avatar;
	}
	public set avatar(value: UserAvatar) {
		this._avatar = value;
	}
	get username(): UserUsername {
		return this._username;
	}
	set username(value: UserUsername) {
		this._username = value;
	}
	get name(): UserName {
		return this._name;
	}
	set name(value: UserName) {
		this._name = value;
	}
	get id(): UserId {
		return this._id;
	}
	set id(value: UserId) {
		this._id = value;
	}

	private constructor(
		private _id: UserId,
		private _name: UserName,
		private _username: UserUsername,
		private _avatar: UserAvatar,
		private _createdAt: CreatedAt,
		private _updatedAt: UpdatedAt
	) {
		super();
	}
}
