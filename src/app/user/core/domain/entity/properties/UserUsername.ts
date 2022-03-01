import { InvalidFieldException } from '@/app/shared/core/domain/InvalidFieldException';
import { StringValueObject } from '@/app/shared/core/domain/valueObjects/StringValueObject';

export class UserUsername extends StringValueObject {
	constructor(_value: string) {
		super(_value);
		this.isNotLessThanFourChars();
	}

	isNotLessThanFourChars() {
		if (this._value.length < 4)
			throw new InvalidFieldException(
				'Username does not have less than 4 characters'
			);
	}
}
