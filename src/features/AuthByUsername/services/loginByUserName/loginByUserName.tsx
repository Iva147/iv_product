import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IUser } from 'entities/User';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';

interface ILoginByUserNameProps {
  username: string
  password: string
}

export const loginByUserName = createAsyncThunk<IUser, ILoginByUserNameProps, { rejectValue: string }>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const { data } = await axios.post<IUser>('http://localhost:8000/login', authData)

      if(!data) throw new Error()

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
      thunkAPI.dispatch(userActions.setAuthData(data))

      return data
    } catch (err) {
      return thunkAPI.rejectWithValue(i18n.t('LoginAndPasswordError'))
    }
  }
)