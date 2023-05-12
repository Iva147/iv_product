import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IUser, IUserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const initialState: IUserSchema = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if(user) {
        state.authData = JSON.parse(user)
      }
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
      state.authData = undefined
    }
  }
})

export const { actions: userActions } = userSlice
export const userReducer = userSlice.reducer