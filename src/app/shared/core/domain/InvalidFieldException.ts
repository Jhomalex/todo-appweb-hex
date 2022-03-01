export class InvalidFieldException extends Error {
	private _reason;
	constructor(message: string) {
		super(message);
		this._reason = message;
	}

	get reason() {
		return this._reason;
	}
}
