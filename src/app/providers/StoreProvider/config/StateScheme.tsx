import type { IUserSchema } from 'entities/User';

export interface IStateScheme {
  counter: {
    value: number
  }
  user: IUserSchema
}