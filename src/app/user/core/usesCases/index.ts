import { UserRepository } from '../../dataSources/UserRepository';
import { SigninInteractor } from './SigninInteractor';
import { SignupInteractor } from './SignupInteractor';

const userRepo = new UserRepository();

export const signinInteractor = new SigninInteractor(userRepo);
export const signupInteractor = new SignupInteractor(userRepo);
