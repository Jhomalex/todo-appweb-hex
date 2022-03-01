type Success = {
	type: 'success';
	message: string;
};

type Invalid = {
	type: 'invalid';
	reason: string;
};

export type InternalResponse = Success | Invalid;
