import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IUser } from 'entities/User';
import axios from 'axios';

interface ILoginByUserNameProps {
  username: string
  password: string
}

export const loginByUserName = createAsyncThunk<IUser, ILoginByUserNameProps, { rejectValue: string }>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData)

      if(!response.data) throw new Error()
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)