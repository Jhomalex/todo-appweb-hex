import { InvalidException } from '@/app/shared/core/domain/InvalidException';
import { InvalidFieldException } from '@/app/shared/core/domain/InvalidFieldException';

export const getExceptionResponse = (err: unknown) => {
	if (err instanceof InvalidException) return err.message;
	if (err instanceof InvalidFieldException) return err.message;
	return 'Something were wrong';
};
