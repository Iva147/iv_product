import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { LoginSchema } from 'features/AuthByUsername/model/types/LoginSchema';
import { loginByUserName } from '../../services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: ''
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUserName.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(loginByUserName.fulfilled, (state, action) => {
        state.isLoading = false
        state.username = action.payload.username
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice