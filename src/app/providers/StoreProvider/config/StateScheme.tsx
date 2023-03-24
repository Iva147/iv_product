import type { IUserSchema } from 'entities/User';
import type { LoginSchema } from 'features/AuthByUsername/model/types/LoginSchema';

export interface IStateScheme {
  counter: {
    value: number
  }
  user: IUserSchema
  loginForm: LoginSchema
}