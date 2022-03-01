type InvalidServerResponse = {
	type: 'invalid';
	reason: string;
};

type SuccessServerResponse<T> = {
	type: 'success';
	message: T;
};

export type ServerResponse<T> =
	| SuccessServerResponse<T>
	| InvalidServerResponse;
